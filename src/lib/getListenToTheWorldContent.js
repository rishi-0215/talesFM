// Rishi
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import client from "../../tina/__generated__/client";

/** Path to the local MDX file (fallback if Tina API fails). */
const LOCAL_MDX_PATH = path.join(
  process.cwd(),
  "content",
  "services",
  "listen-to-the-world.mdx"
);

export async function getListenToTheWorldContent() {
  try {
    const res = await client.queries.homePage({
      relativePath: "listen-to-the-world.mdx",
    });

    if (res?.data?.listenToTheWorld) {
      return res.data.listenToTheWorld;
    }
  } catch {
    // If Tina API fails (branch not synced etc), fallback to local file
  }

  const raw = fs.readFileSync(LOCAL_MDX_PATH, "utf8");
  const { data } = matter(raw);
  return data;
}
