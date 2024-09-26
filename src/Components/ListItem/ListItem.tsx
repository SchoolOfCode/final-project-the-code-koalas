// import React from 'react';
// import styles from './ListItem.module.css';

export interface ListItemProps {
  recipe_name: string;
  recipe_time: string;
}

export default function ListItem({ recipe_name, recipe_time }: ListItemProps) {
  return (
    <>
      <div className="listItem">
        <h2>{recipe_name ? recipe_name : "Searching for recipes..."}</h2>
        {recipe_name ? <span><span>
          <svg xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 -960 960 960" fill="var(--white)">
            <path d="M384-840q-23.37 0-39.19-16.5Q329-873 329-896t15.81-39q15.82-16 39.19-16h192q23.38 0 39.19 15.81Q631-919.38 631-896q0 23-15.81 39.5T576-840H384Zm96 468q23.38 0 39.19-15.81Q535-403.63 535-427v-133q0-23.38-15.81-39.19Q503.38-615 480-615q-23.37 0-39.19 15.81Q425-583.38 425-560v133q0 23.37 15.81 39.19Q456.63-372 480-372Zm0 353q-82 0-153.51-30.89-71.5-30.89-125-84Q148-187 117-258.5 86-330 86-412t31.09-153.45q31.09-71.46 84.55-124.91 53.45-53.46 124.91-84.55Q398-806 480-806q64 0 125 20t112 59l29-29q17-17 39.5-17t39.5 17q17 17 17 39.5T825-677l-29 29q39 51 58.5 111.5T874-412q0 82-31 153.5t-84.49 124.61q-53.5 53.11-125 84Q562-19 480-19Zm0-126q112 0 190-77.5T748-412q0-112-78-190t-190-78q-112 0-190 78t-78 190q0 112 78 189.5T480-145Zm0-267Z" />
          </svg>
        </span><span>{recipe_time}m</span></span> : <></>}
      </div>
    </>
  );
}
