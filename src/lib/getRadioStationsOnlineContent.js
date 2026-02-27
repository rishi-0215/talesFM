// Rishi
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import client from "../../tina/__generated__/client";

const LOCAL_MDX_PATH = path.join(
  process.cwd(),
  "content",
  "services",
  "radio-stations-online.mdx",
);

export async function getListenRadioStationsOnlineContent() {
  try {
    const res = await client.queries.radioStationsOnline({
      relativePath: "radio-stations-online.mdx",
    });

    if (res?.data?.radioStationsOnline) {
      return res.data.radioStationsOnline;
    }
  } catch (err) {
    console.log("Falling back to local MDX:", err);
  }

  // Fallback to local file
  const raw = fs.readFileSync(LOCAL_MDX_PATH, "utf8");
  const { data } = matter(raw);

  return data;
}
