const Loading = ({ loading }: { loading: boolean }) => {
    return (
        loading ? (
            <div className="absolute left-1/2 top-[calc(50%-50px)] z-[10000]">
                <div className="loader-5 center"><span></span></div>
            </div>
        ) : <></>
    )
};

export default Loading;
