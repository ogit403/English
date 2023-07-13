import Sound from "@common/Sound";
import { useState } from "react";

interface TitleProps {
    keyword: string;
    show: boolean;
    translate: string;
    changeValue: (_value: Partial<HomePage>) => void;
}

const Title = ({ keyword, show, translate, changeValue }: TitleProps) => {
    return (
        <p className="mt-[10px] flex items-center justify-center">Keyword: <span className="font-[700] ml-[10px]">{keyword}</span>
            <Sound content={keyword} />
            {
                !show && (
                    <button className="text-[12px] ml-[15px] bg-[#6ef36e] text-[white] py-[5x] px-[10px]" onClick={() => changeValue({ show: true })}>hiện nghĩa</button>
                )
            }
            {
                show && <span className="ml-[15px] text-[green] text-[12px]">({translate})</span>
            }
        </p>
    );
}

export default Title;
