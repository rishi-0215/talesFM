import fs from "fs";
import path from "path";
import matter from "gray-matter";
import client from "../../tina/__generated__/client";

const LOCAL_MDX_PATH = path.join(
  process.cwd(),
  "content",
  "services",
  "listen-radio-online.mdx"
);

export async function getListenRadioOnlineContent() {
  try {
    const res = await client.queries.listenRadioOnline({
      relativePath: "listen-radio-online.mdx",
    });

    if (res?.data?.listenRadioOnline) {
      return res.data.listenRadioOnline;
    }
  } catch {
    // fallback
  }

  const raw = fs.readFileSync(LOCAL_MDX_PATH, "utf8");
  const { data } = matter(raw);

  return data;
}
