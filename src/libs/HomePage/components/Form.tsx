import Sound from "@common/Sound";
import { handleSound } from "@utils/helper";
import { DetailedHTMLProps, InputHTMLAttributes, LegacyRef, useEffect, useRef } from "react";

interface FormMainProps {
    changeValue: (_value: Partial<HomePage>) => void;
    value: string;
    error: number;
    paragraph_english: string;
    handleSubmit: () => void;
    keyword: string;
    phrases: Information[]
}

const FormMain = ({ changeValue, error, paragraph_english, value, handleSubmit, keyword, phrases }: FormMainProps) => {
    const mytext = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (mytext) {
            mytext.current?.focus();
        }
    })

    return (
        <>
            <div className="relative mt-[50px]" style={{ position: 'relative', marginTop: 100, }}>
            
            <input
                ref={mytext}
                autoComplete="off"
                className="w-full color-[#333] font-[500] text-[18px] pl-[15px] pb-[10px] border-solid"
                style={{
                    borderWidth: '0px 0px 1px 0px',
                    borderImageSlice: 1,
                    borderImageSource: 'linear-gradient(to right, rgb(104, 40, 250), rgb(255, 186, 164))',
                    fontFamily: 'Comfortaa',
                    color: 'black',
                    backgroundColor: 'rgb(255 253 250)'
                }}
                id="input"
                onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        handleSubmit();
                    }
                    if (event.key === '1') {
                        handleSound(paragraph_english);
                    }
                    if (event.key === '2') {
                        handleSound(keyword);
                    }
                    if (/^[3-9]+$/.test(event.key)) {
                        console.log('sdasda', Number(event.key) - 3, phrases);
                        handleSound(phrases[Number(event.key) - 3].title);
                    }
                }}
                pattern="^[a-zA-Z]+$"
                onChange={(e) => {
                    if (!(/[0-9]/.test(e.target.value))) {
                        changeValue({ value: e.target.value })
                    }
                }}
                type="text" value={value}
            />
            <label htmlFor="input" className="font-[600] text-[black] opacity-[80] absolute left-[15px]" style={{ top: value ? '-25px' : '5px', color: value && '#1473e6' }}>Type your word</label>
            <p className={`text-[14px] flex justify-center items-center mt-[20px] ${error === 1 || error === 0 ? 'text-[red]' : 'text-[transparent]'}`}>{
                ([0, 1].includes(error)) && (error === 1 ? 'Hông đúng òi, thử lại lần nữa nghenn' : (
                    <>
                        <span>{paragraph_english}</span>
                        <Sound content={paragraph_english} />
                        <span className="text-[blue] text-[12px] ml-[20px] cursor-pointer font-[600]" onClick={() => navigator.clipboard.writeText(paragraph_english)}>
                            Copy
                        </span>
                    </>
                ))
            }</p>
        </div>
        </>
    );
}

export default FormMain;
