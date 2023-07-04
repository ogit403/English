import { handleSound } from "@utils/helper";

const Sound = ({ content }: { content: string }) => (
    <img className="cursor-pointer ml-[5px]" onClick={() => handleSound(content)} src="/sound.png" />
);

export default Sound;
