/* eslint-disable no-constant-condition */
import './App.css'
import useAction from '@libs/HomePage/hooks/useAction';
import Loading from '@common/Loading';
import { FormHomePage, MoreInformationHomePage, TitleHomePage } from '@libs/HomePage/components';

function App() {
    const { changeValue, handleReset, main, items, index, setIndex } = useAction();
    const { error, loading, value, show } = main;
 

    const handleSubmit = () => {
        if (value.toLowerCase() !== items[index].paragraph_english.toLowerCase()) {
            if (error !== 0) {
                changeValue({ error: error - 1 });
            }
            return;
        }

        setIndex(index + 1);
    };


    return (
        <div className="flex items-center justify-center h-[100vh]">
            <div>
                <div className="w-[60vw] relative">
                    <h1 className="text-[40px] mb-0 mt-0">{!(index === items.length) ? items[index].paragraph_vietnamese : 'Đã hoàn thành tất cả các câu'}</h1>
                    {
                        index === items.length && (
                            <p
                                className="mt-[10px] text-[14px] cursor-pointer"
                                onClick={handleReset} >Thử lại hennn</p>
                        )
                    }
                    <Loading loading={loading} />
                    {
                        !(index === items.length) && (
                            <>
                                <TitleHomePage changeValue={changeValue} keyword={items[index].keyword} show={show} translate={items[index].translate} />
                                <FormHomePage handleSubmit={handleSubmit} changeValue={changeValue} error={error} paragraph_english={items[index].paragraph_english} value={value} />
                                <MoreInformationHomePage data={items[index].phrases} />
                                <div className="pt-[60px]">
                                    <button disabled={loading} className="bg-[green] text-[white]" onClick={handleSubmit}>Submit</button>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default App
