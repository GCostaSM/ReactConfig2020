import { Input,Form,Button } from "antd";
import React, {ChangeEvent, FormEvent, useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {InitialState, DefaultDispatcher} from "../../reducers/default/default-redux";

interface Props {
}

interface StateProps {
    name: string;
    address: string;
}

const Default: React.FC<Props> = () => {

    let {name, address} = useSelector<InitialState, StateProps>((state: InitialState) => {
        return {
            name: state.name,
            address: state.address
        }
    });

    const dispatch = useDispatch();
    const defaultDispatcher = new DefaultDispatcher(dispatch);


    return (
        <Form layout="inline">
            <Form.Item>
                <Input type="text" placeholder="name" value={name}
                       onChange={(e: ChangeEvent<HTMLInputElement>) => {
                           defaultDispatcher.updateName(e.target.value)}
                       }
                />
                <Input type="text" placeholder="address" value={address}
                       onChange={(e: ChangeEvent<HTMLInputElement>) =>{
                           defaultDispatcher.updateAddress(e.target.value)}
                       }
                />
                <Button htmlType="submit" type="primary" onClick={()=>{
                    return defaultDispatcher.insertDefault(name='',address='');
                }}> Submit </Button>
            </Form.Item>
        </Form>
    )
};

export default Default;