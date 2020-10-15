import React, {ChangeEvent, FormEvent, useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {InitialState, DefaultDispatcher} from "../../reducers/default/default-redux";
import Comet from '../../assets/comet_1.svg';
import Banner from '../../assets/banner_image.png';

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
        <div>
            <nav>
                <h1>Cosmo Junkie</h1>
                <ul>
                    <li>Portfolio</li>
                    <li>Skills</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <section>
                <div>
                    <h2>Space Enthusiast <br/>& Javascript developer</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <a></a>
                </div>
                <div>
                    <img src={Banner} alt=""/>
                </div>
            </section>
            <section>
                <h3>Some of my projects</h3>
                <div>
                    
                </div>
            </section>
        </div>
    )
};

export default Default;