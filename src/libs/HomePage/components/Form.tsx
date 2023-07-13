import Sound from "@common/Sound";

interface FormMainProps {
    changeValue: (_value: Partial<HomePage>) => void;
    value: string;
    error: number;
    paragraph_english: string;
    handleSubmit: () => void;
}

const FormMain = ({ changeValue, error, paragraph_english, value, handleSubmit }: FormMainProps) => (
    <>
        {/* <div className="mb-8">
        <Sound content={paragraph_english} />
        </div> */}
        <div className="relative mt-[50px]" style={{ position: 'relative', marginTop: 100, }}>
        
        <input
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
            }}
            onChange={(e) => changeValue({ value: e.target.value })}
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

export default FormMain;
