import './index.css'
import { Input, Modal, Row, Col, Button  } from 'antd';
import useActionCreate from './hooks/useAction';
import * as yup from 'yup';
import { Controller, useForm, FieldValues, Control, FieldValue } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRHFTextField } from './components/FieldCreate';
import MoreInformationCreate from './components/MoreInformation';

interface Input {
    keyword: string;
    translate: string;
    paragraph_english: string;
    paragraph_vietnamese: string;
}

const schema = yup.object().shape({
    keyword: yup.string().required('Keyword is required'),
    translate: yup.string().required('Translate is required'),
    paragraph_english: yup.string().required('Paragraph English is required'),
    paragraph_vietnamese: yup.string().required('Paragraph Vietnamese is required'),
});

const Create = () => {
    const { handleChangeShow, show } = useActionCreate();
    const RHFTextField = useRHFTextField();
    
    const {
        control,
        trigger,
        formState: { errors },
    } = useForm<Input>({
        resolver: yupResolver(schema),
        defaultValues: {
            keyword: '',
            translate: '',
            paragraph_english: '',
            paragraph_vietnamese: '',
        }
    })

    const handleSubmit = async () => {
        if (!await trigger()) {

        }
    }

    return (
        <>
            <button onClick={() => handleChangeShow(true)} className="button-62 absolute top-[50px] right-[100px] w-[100px]" role="button">Create</button>
            <Modal footer={<></>} onCancel={() => handleChangeShow(false)} width={700} centered title="" open={show}>
                <p className="text-left realtive text-[#f56767] font-main text-[24px] font-[600] h-[34px]">Create</p>
                <span className="absolute top-[20px] left-0 w-[2px] rounded-full h-[34px] bg-[#f56767]" />
                <div className="pt-[20px] font-main space-y-4">
                    <Row justify="space-between" gutter={20}>
                        <Controller
                            control={control}
                            name="keyword"
                            render={({ field }) => (
                                <Col span={12}>
                                    <span className="font-[600] font-main">Keyword</span>
                                    <Input {...field} status={errors.keyword?.message && 'error'} placeholder="Keyword" />
                                </Col>
                            )}
                        />
                        <Controller
                            control={control}
                            name="translate"
                            render={({ field }) => (
                                <Col span={12}>
                                    <span className="font-[600] font-main">Translate</span>
                                    <Input {...field} status={errors.translate?.message && 'error'} placeholder="Translate" />
                                </Col>
                            )}
                        />
                    </Row>
                    <Row justify="space-between" gutter={20}>
                        <Controller
                            control={control}
                            name="paragraph_english"
                            render={({ field }) => (
                                <Col span={24}>
                                    <span className="font-[600] font-main">Paragraph English</span>
                                    <Input {...field} status={errors.paragraph_english?.message && 'error'} placeholder="Paragraph English" />
                                </Col>
                            )}
                        />
                    </Row>
                    <Row justify="space-between" gutter={20}>
                        <Controller
                            control={control}
                            name="paragraph_vietnamese"
                            render={({ field }) => (
                                <Col span={24}>
                                    <span className="font-[600] font-main">Paragraph Vietnamese</span>
                                    <Input {...field} status={errors.paragraph_vietnamese?.message && 'error'} placeholder="Paragraph Vietnamese" />
                                </Col>
                            )}
                        />
                    </Row>
                    <MoreInformationCreate />
                </div>
                <div className="flex justify-center items-center mt-[20px]">
                    <Button onClick={handleSubmit} className="!hover:bg-[#ff7875] !hover:border-[#ff7875]" type="primary" danger>Create</Button>
                </div>
            </Modal>
        </>
    )
}

export default Create;
