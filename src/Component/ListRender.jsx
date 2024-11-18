import React, { useState } from "react";

function ListRender() {
    const [data, setdata] = useState([
        {
            name: "Arun",
            age: 25,
            carimg: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?cs=srgb&dl=action-asphalt-auto-210019.jpg&fm=jpg",
        },
        {
            name: "logii",
            age: 55,
            carimg: "https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?cs=srgb&dl=alloy-asphalt-auto-241316.jpg&fm=jpg",
        },
    ]);

    return (
        <div>
            <h1>ListRender</h1>

            {data.map((da) => (
                <div>
                    <h1>{da.name}</h1>
                    <img height={200} width={200} src={da.carimg} />
                </div>

            ))}
        </div>
    );
}
export default ListRender
