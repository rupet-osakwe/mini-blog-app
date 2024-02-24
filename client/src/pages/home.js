import React from 'react'
import { SiApplemusic } from "react-icons/si";
import { FaMobileRetro } from "react-icons/fa6";
import { LuSunset } from "react-icons/lu";
import { FaFlagUsa } from "react-icons/fa";
import { Link } from 'react-router-dom';



const Home = () => {
    const posts = [
        {
            id: 1,
            title: "Music consectetur adipisicing elit. Aspernatur quis voluptas corporis ratione architecto quia",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est labore placeat dignissimos minus exercitationem laudantium ex voluptate quis sit nulla corrupti totam nesciunt recusandae perferendis, rem quos repellendus officiis earum provident mollitia et fuga quia. Itaque, repellendus aliquid quia corporis magnam adipisci quasi ex quo ipsam. Sint adipisci beatae amet accusamus ipsa ex quas vel laboriosam maiores iusto? Ab est expedita porro provident minima fugiat ad nam fugit aut modi dolor iure molestias officia laboriosam magnam quidem nobis aliquam unde ea, harum eum ratione alias repudiandae saepe. Laborum, beatae natus aperiam nemo quo illum, asperiores iusto, placeat ab distinctio voluptate.",
            image: <SiApplemusic className='post-image' />

        },
        {
            id: 2,
            title: "Mobile corporis ratione architecto quia",
            desc: "met consectetur adipisicing elit. Mollitia labore atque eius laudantium nam. Minima laborum consequuntur earum totam dolorum quam quidem rerum voluptates officiis quo provident, cupiditate beatae facilis corporis, commodi vel. Beatae, alias magnam. Cupiditate voluptatum vel provident accusamus ab. Aperiam perferendis iusto illo placeat similique, alias impedit non quae possimus hic quas velit eius quibusdam! Iste itaque culpa ducimus repellat nesciunt modi tempore. Nobis iste vel dolorem magni eligendi. Fugit explicabo sint ex, expedita possimus ad quae architecto dolores nobis vel saepe enim quod minima placeat obcaecati assumenda voluptates exercitationem? Corrupti culpa soluta dignissimos rem dolore, repellendus nesciunt assumenda quod. Inventore accusantium quasi ducimus nam corporis adipisci a non numquam saepe natus iste libero, consectetur totam in, optio enim! In quod nemo ad consequuntur? Error, repellendus exercitationem debitis eligendi at voluptatibus accusantium consectetur sed dolorum. Accusamus voluptatum numquam saepe beatae sit, velit impedit consequatur ad repellat, quod, quo quaerat. A, totam dolorum! Odio amet soluta sint eos placeat laborum quod? Dolore officiis illo iusto voluptates adipisci, quisquam corrupti cumque fugiat laborum et odit dolorem ad sit! Nesciunt.",
            image: <FaMobileRetro className='post-image' />
        },
        {
            id: 3,
            title: "Thee beauty of nature ",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est labore placeat dignissimos minus exercitationem laudantium ex voluptate quis sit nulla corrupti totam nesciunt recusandae perferendis, rem quos repellendus officiis earum provident mollitia et fuga quia. Itaque, repellendus aliquid quia corporis magnam adipisci quasi ex quo ipsam. Sint adipisci beatae amet accusamus ipsa ex quas vel laboriosam maiores iusto? Ab est expedita porro provident minima fugiat ad nam fugit aut modi dolor iure molestias officia laboriosam magnam quidem nobis aliquam unde ea, harum eum ratione alias repudiandae saepe. Laborum, beatae natus aperiam nemo quo illum, asperiores iusto, placeat ab distinctio voluptate.",
            image: <LuSunset className='post-image' />
        },
        {
            id: 4,
            title: "cultural heritage of canada",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est labore placeat dignissimos minus exercitationem laudantium ex voluptate quis sit nulla corrupti totam nesciunt recusandae perferendis, rem quos repellendus officiis earum provident mollitia et fuga quia. Itaque, repellendus aliquid quia corporis magnam adipisci quasi ex quo ipsam. Sint adipisci beatae amet accusamus ipsa ex quas vel laboriosam maiores iusto? Ab est expedita porro provident minima fugiat ad nam fugit aut modi dolor iure molestias officia laboriosam magnam quidem nobis aliquam unde ea, harum eum ratione alias repudiandae saepe. Laborum, beatae natus aperiam nemo quo illum, asperiores iusto, placeat ab distinctio voluptate.",
            image: <FaFlagUsa className='post-image' />
        },
    ]
    return (
        <div className='home'>
            <div className='posts'>{posts.map(post => (<div key={post.id}>
                <div className='post-image'>{post.image}</div>
                <div className='content'>
                    <Link to={`post/${post.id}`} className='link'>
                        <h1>{post.title}</h1>
                        <p>{post.desc}  <button className='link-button'>Read More</button></p>

                    </Link>
                </div>

            </div>))}  </div>

        </div >
    )
}

export default Home