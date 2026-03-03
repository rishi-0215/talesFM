

import Body from "../../components/Body";
import { getListenRadioOnlineContent } from "../../../../lib/getListenRadioOnlineContent";

export default async function Hero() {
  const content = await getListenRadioOnlineContent();

  return (
    <div className="mt-40 max-w-11/12 lg:max-w-9/12 md:max-w-10/12 sm:max-w-10/12 mx-auto space-y-10">
      
      {[content.indianRadioData, content.whyStillRadio].map((data, i) => (
        <Body key={i} data={data} />
      ))}

      
    </div>
  );
}