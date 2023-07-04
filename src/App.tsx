/* eslint-disable no-constant-condition */
import './App.css'
import useAction from '@libs/HomePage/hooks/useAction';
import Loading from '@common/Loading';
import { FormHomePage, MoreInformationHomePage, TitleHomePage } from '@libs/HomePage/components';
import { GetUsersDocument } from './graphql/generated'
import { useQuery } from '@apollo/client';

function App() {
    const { changeValue, data, handleReset, main, nextNumber } = useAction();
    const { arr, done, error, loading, random, value, show } = main;
 
    const results = useQuery(GetUsersDocument);
    console.log('results 123', results);

    

    const handleSubmit = () => {
        if (value.toLowerCase() !== data[random].paragraph_english.toLowerCase()) {
            if (error !== 0) {
                changeValue({ error: error - 1 });
            }
            return;
        }
        if (data.length - 1 === arr.length) {
            changeValue({ done: true });
            return;
        }

        let newRandom = Math.floor(Math.random() * data.length);

        changeValue({ loading: true });
        while (newRandom !== random) {
            if (newRandom !== random && !arr.includes(newRandom)) {
                nextNumber({ arr: [...arr, newRandom], random: newRandom })
                break;
            } else {
                newRandom = Math.floor(Math.random() * data.length);
            }
        }
        changeValue({ loading: false })
    };


    return (
        <div className="flex items-center justify-center h-[100vh]">
            <div>
                <div className="w-[60vw] relative">
                    <h1 className="text-[40px] mb-0 mt-0">{!done ? data[random].paragraph_vietnamese : 'Đã hoàn thành tất cả các câu'}</h1>
                    {
                        done && (
                            <p
                                className="mt-[10px] text-[14px] cursor-pointer"
                                onClick={handleReset} >Thử lại hennn</p>
                        )
                    }
                    <Loading loading={loading} />
                    {
                        !done && (
                            <>
                                <TitleHomePage changeValue={changeValue} keyword={data[random].keyword} show={show} translate={data[random].translate} />
                                <FormHomePage handleSubmit={handleSubmit} changeValue={changeValue} error={error} paragraph_english={data[random].paragraph_english} value={value} />
                                <MoreInformationHomePage data={data[random].phrases} />
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
