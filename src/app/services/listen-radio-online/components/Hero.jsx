

import Body from "../../components/Body";
import { getListenRadioOnlineContent } from "../../../../lib/getListenRadioOnlineContent";

export default async function Hero() {
  const content = await getListenRadioOnlineContent();

  return (
    <div className="mt-40 max-w-11/12 lg:max-w-9/12 md:max-w-10/12 sm:max-w-10/12 mx-auto space-y-10">
      
      {[content.indianRadioData, content.whyStillRadio].map((data, i) => (
        <Body key={i} data={data} />
      ))}

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute -z-9999 inset-0 w-full h-full blur-lg object-cover"
      >
        <source src="/bgAnimation.webm" type="video/webm" />
        <source src="/bgAnimation.mp4" type="video/mp4" />
      </video>
    </div>
  );
}