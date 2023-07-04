import { AddIcon, DeleteIcon } from '@icons';
import { Input, Row, Col, Space  } from 'antd';
import { useForm, useFieldArray } from 'react-hook-form';

interface ItemInformation {
    list: {
        title: string;
        content: string;
    }[]
}

const MoreInformationCreate = () => {
    const { control, register } = useForm<ItemInformation>({
        defaultValues: {
            list: [{
                title: '',
                content: ''
            }]
        }
    });
    const { fields, append, remove } = useFieldArray({
        control, // control props comes from useForm (optional: if you are using FormContext)
        name: "list", // unique name for your Field Array
    });

    const handleAdd = () => {
        append({ title: '', content: '' })
    }
    
    const handleDelete = (index: number) => {
        remove(index)
    }

    return (
        <div className="mb-4">
            <div className="flex justify-between items-center mb-4">
                <span className="font-[600] font-main">More Information</span>
                <span onClick={handleAdd} className="cursor-pointer">
                    <AddIcon />
                </span>
            </div>
            <Space direction="vertical" size={8} style={{ display: 'flex' }}>
                {
                    fields.map((el, index) => (
                        <div className="flex justify-between items-center">
                            <Row className="w-full" key={el.id} justify="space-between" gutter={20}>
                                <Col span={12}>
                                    <span className="font-[600] font-main">Keyword</span>
                                    <Input {...register(`list.${index}.title`)} placeholder="Keyword" />
                                </Col>
                                <Col span={12}>
                                    <span className="font-[600] font-main">Translate</span>
                                    <Input {...register(`list.${index}.content`)} placeholder="Translate" />
                                </Col>
                            </Row>
                            <span onClick={() => handleDelete(index)} className="w-[50px] cursor-pointer flex justify-end items-end">
                            {
                                index !== 0 && (
                                    <DeleteIcon />
                                )
                            }
                            </span>
                        </div>
                    ))
                }
            </Space>
        </div>
    )
}

export default MoreInformationCreate;
