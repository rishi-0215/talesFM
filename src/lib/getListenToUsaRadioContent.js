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
  "listen-to-usa-radio.mdx"
);

export async function getListenToUsaRadio() {
  try {
    const res = await client.queries.listenToUSARadio({
      relativePath: "listen-to-usa-radio.mdx",
    });

    if (res?.data?.listenToUSARadio) {
      return res.data.listenToUSARadio;
    }
  } catch {
    // Tina API may not have the record (branch not synced etc)
  }

  // Fallback to local file
  const raw = fs.readFileSync(LOCAL_MDX_PATH, "utf8");
  const { data } = matter(raw);
  return data;
}