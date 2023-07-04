import Sound from "@common/Sound";

interface FormMainProps {
    changeValue: (_value: Partial<HomePage>) => void;
    value: string;
    error: number;
    paragraph_english: string;
}

const FormMain = ({ changeValue, error, paragraph_english, value }: FormMainProps) => (
    <form className="relative mt-[100px]" style={{ position: 'relative', marginTop: 100, }}>
        <input
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
            onChange={(e) => changeValue({ value: e.target.value })}
            type="text" value={value}
        />
        <label htmlFor="input" className="font-[600] text-[black] opacity-[80] absolute left-[15px]" style={{ top: value ? '-25px' : '5px', color: value && '#1473e6' }}>Type your word</label>
        { error === 1 && <p className="text-[red] text-[14px] mt-[20px]">Hông đúng òi, thử lại lần nữa nghenn</p> }
        {
            error === 0 && <p className="text-[red] text-[14px] flex justify-center items-center mt-[20px]">{paragraph_english}
                <Sound content={paragraph_english} />
                <span className="text-[blue] text-[12px] ml-[20px] cursor-pointer font-[600]" onClick={() => navigator.clipboard.writeText(paragraph_english)}>
                    Copy
                </span>
            </p>
        }
    </form>
);

export default FormMain;
