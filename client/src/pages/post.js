import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../components/menu';
import { RiDeleteBinFill } from "react-icons/ri";
import { LiaEdit } from "react-icons/lia";
import { FcPortraitMode } from "react-icons/fc";
import { GiSpookyHouse } from "react-icons/gi";




const Post = () => {
    return (
        <div className='single'>Post
            <div className='content'>Content
                < GiSpookyHouse className='img1' />
                <div className='user'>
                    <FcPortraitMode className='user-img' />
                    <div className='info'>
                        <span className='user-name'>Rupet</span>
                        <p className='time-stamp'>posted 2days ago</p>
                    </div>
                    <div className='action'>
                        <Link to={`create-post?edit=2`} className='link1 edit '><LiaEdit className='link1' /> <b />edit</Link>

                        <Link to={`#`} className='link2'><RiDeleteBinFill className='link2 delete' /><br />delete</Link>
                    </div>
                </div>
                <h1>Music consectetur adipisicing elit. Aspernatur quist  volupta</h1>
                <p>met consectetur adipisicing elit. Mollitia labore atque eius laudantium nam. Minima laborum consequuntur earum totam dolorum quam quidem rerum voluptates officiis quo provident, cupiditate beatae facilis corporis, commodi vel. Beatae, alias magnam. Cupiditate voluptatum vel provident accusamus ab. Aperiam perferendis iusto illo placeat similique, alias impedit non quae possimus hic quas velit eius quibusdam! Iste itaque culpa ducimus repellat nesciunt modi tempore. Nobis iste vel dolorem magni eligendi. Fugit explicabo sint ex, expedita possimus ad quae architecto dolores nobis vel saepe enim quod minima placeat obcaecati assumenda voluptates exercitationem? Corrupti culpa soluta dignissimos rem dolore, repellendus nesciunt assumenda quod. Inventore accusantium quasi ducimus nam corporis adipisci a non numquam saepe natus iste libero, consectetur totam in, optio enim! In quod nemo ad consequuntur? Error, repellendus exercitationem debitis eligendi at voluptatibus accusantium consectetur sed dolorum. Accusamus voluptatum numquam saepe beatae sit, velit impedit consequatur ad repellat, quod, quo quaerat. A, totam dolorum! Odio amet soluta sint eos placeat laborum quod? Dolore officiis illo iusto voluptates adipisci, quisquam corrupti cumque fugiat laborum et odit dolorem ad sit! Nesciunt..</p>
            </div>

            <Menu />
        </div>
    )
}

export default Post