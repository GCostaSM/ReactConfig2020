import React, {ChangeEvent, FormEvent, useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {InitialState, DefaultDispatcher} from "../../reducers/default/default-redux";
import Comet from '../../assets/comet_1.svg';
import Banner from '../../assets/banner_image.png';
import Project1 from '../../assets/project_1.png';
import Project2 from '../../assets/project_2.png';
import Project3 from '../../assets/project_3.png';
import Comet1 from '../../assets/comet_1.svg';
import Comet2 from '../../assets/comet_2.svg';
import Comet3 from '../../assets/comet_3.svg';
import Comet4 from '../../assets/comet_4.svg';
import fb from '../../assets/icon_fb.svg';
import twitter from '../../assets/icon_tw.svg';
import  { P, A, UL, LI, Button, Input, TextArea, H1, Leading }  from './StyleDefault'

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
                <H1>Cosmo Junkie</H1>
                <UL>
                    <LI>Portfolio</LI>
                    <LI>Skills</LI>
                    <LI>Contact</LI>
                </UL>
            </nav>
            <section>
                <div>
                    <h2>Space Enthusiast <br/>& Javascript developer</h2>
                    <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</P>
                    <A></A>
                </div>
                <div>
                    <img src={Banner} alt=""/>
                </div>
            </section>
            <Leading>
                <h3>Some of my projects</h3>
                <div>
                    <A href="#">
                        <img src={Project1}/>
                        <h4>Space Race Game</h4>
                    </A>
                    <A href="#">
                        <img src={Project2}/>
                        <h4>Planet Boy API</h4>
                    </A>
                    <A href="#">
                        <img src={Project3}/>
                        <h4>Captain Cosmo Blog</h4>
                    </A>
                </div>
            </Leading>
            <section>
                <h3>Things i can do</h3>
                <UL>
                    <LI>
                        <img src={Comet1} />
                        <h4>Javascript</h4>
                    </LI>
                    <LI>
                        <img src={Comet2} />
                        <h4>Typescript</h4>
                    </LI>
                    <LI>
                        <img src={Comet3} />
                        <h4>Firebase</h4>
                    </LI>
                    <LI>
                        <img src={Comet4} />
                        <h4>Node</h4>
                    </LI>
                </UL>
            </section>
            <section>
                <h3>Get in touch</h3>
                <P> orem Ipsum is simply dummy text of the printing and</P>
                <form>
                    <Input type="text" placeholder="NAME"/>
                    <Input type="email" placeholder="EMAIL"/>
                    <TextArea placeholder="YOUR MESSAGE"></TextArea>
                    <Button>Send</Button>
                </form>
            </section>
            <footer>
                <div>
                    <P>Copyright 2020</P>
                    <UL>
                        <LI><A href=""><img src={fb}></img></A></LI>
                        <LI><A href=""><img src={twitter}></img></A></LI>
                    </UL>
                </div>
            </footer>
        </div>
    )
};

export default Default;