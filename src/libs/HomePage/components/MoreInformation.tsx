import Sound from "@common/Sound";

interface MoreInformationProps {
    data: Information[];
}

const MoreInformation = ({ data }: MoreInformationProps) => {
    return (
        <div className="mt-[40px] font-[700]">
            <p className="text-[#1473e6] mb-[20px]">
                More Information
            </p>
            {
                data.map((el: Information) => (
                    <div key={el.title} className="flex items-center mb-[10px]">
                        <div className="pl-[10px] w-1/2 text-[#333] font-[700] text-[16px] text-center flex items-center justify-center">
                            {el.title}
                            <Sound content={el.title} />
                        </div>
                        <div className="w-1/2 text-center font-[800] text-[rgb(121, 121, 121)]">{el.content}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default MoreInformation;
