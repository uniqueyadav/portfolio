import { NextResponse } from "next/server";

const VISITOR_KEY = "portfolio:visitor-count";
const INITIAL_VISITOR_COUNT = 979;

function getRedisConfig() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) return null;
  return { url: url.replace(/\/$/, ""), token };
}

async function redisCommand(command) {
  const config = getRedisConfig();
  if (!config) return null;

  const response = await fetch(config.url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
    cache: "no-store",
  });

  if (!response.ok) throw new Error("Visitor counter storage request failed");
  const result = await response.json();
  if (result.error) throw new Error("Visitor counter storage command failed");
  return result.result;
}

export async function GET() {
  if (!getRedisConfig()) {
    return NextResponse.json(
      { error: "Visitor counter is not configured" },
      { status: 503 },
    );
  }

  try {
    const value = await redisCommand(["GET", VISITOR_KEY]);
    return NextResponse.json({
      count: Math.max(Number(value) || 0, INITIAL_VISITOR_COUNT + 1),
    });
  } catch {
    return NextResponse.json(
      { error: "Could not load visitor count" },
      { status: 502 },
    );
  }
}

export async function POST() {
  if (!getRedisConfig()) {
    return NextResponse.json(
      { error: "Visitor counter is not configured" },
      { status: 503 },
    );
  }

  try {
    // Initialize at 979 and increment atomically, so the first visit is 980.
    const count = await redisCommand([
      "EVAL",
      `local count = tonumber(redis.call('GET', KEYS[1]) or '0'); if count < tonumber(ARGV[1]) then redis.call('SET', KEYS[1], ARGV[1]); end; return redis.call('INCR', KEYS[1])`,
      1,
      VISITOR_KEY,
      INITIAL_VISITOR_COUNT,
    ]);
    return NextResponse.json({ count: Number(count) });
  } catch {
    return NextResponse.json(
      { error: "Could not update visitor count" },
      { status: 502 },
    );
  }
}
