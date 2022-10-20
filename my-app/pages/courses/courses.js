import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image';
import { useState } from 'react'
// import { getAllMachines } from '../../utils/data'
// import styles from '../../styles/Machine.module.css'


export default function Courses() {
    return (
        <div>
            <Link href="/df101">
                <li className="nav-item">
                    <a className="nav-link">Digital Fabrication 101</a>
                </li>
            </Link> 
            <Link href="/cd101">
                <li className="nav-item">
                    <a className="nav-link">Computational Design 101</a>
                </li>
            </Link>
            <Link href="/cs101">
                <li className="nav-item">
                    <a className="nav-link">Computer Science 101</a>
                </li>
            </Link>
        </div>
    )
}

// export default function Machines({ allMachines: {edges}, preview }) {
//   const machines = edges;
//   const [filter, setFilter] = useState("All");
//   const filter_items = ['All', '2D', '3D', 'Analog', 'Digital'];
  
//   function search(items) {
//     if (filter.includes('All')) {
//       return items
//     }
//     let found_items = []
//     try {
//       for (let item of items) {
//         for (let edge of item.node.machineType.edges) {
//           if (edge.node.title.includes(filter)) {
//             found_items.push(item)
//             break
//           }
//         }
//       }
//     }
//     catch (e) {
//       console.log(e)
//     }
    
//     return found_items
//   }

//   return (
//     <div className={styles.machine_container}>
//       <Head>
//         <title>Машины - Фихтех.Фабрика</title>
//         <meta name="description" content="Физтех.Фабрика" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <div className={styles.machines_list}>
//         <div className={styles.filtering}>
//           <div className={styles.select}>
//             <select
//               onChange={(e) => setFilter(e.target.value)}
//               className={styles.custom_select}
//               aria-label="filter machines by type">
//               {filter_items.map((item) => (
//                 <option key={item} value={item}>{item}</option>
//               ))}
//             </select>
//           </div>
//         </div>
//         {search(machines).map(({ node }) => (
//           <div key={node.id} className={styles.machine_item}>
//             <div className={styles.machine_item_content}>
//               <h3><span className={styles.item_code}>GCC1</span> {node.title}</h3>

//               <div className={styles.machine_meta}>
//                 <table>
//                   <tbody>
//                   <tr>
//                     <td>рабочая область:</td>
//                     <td>900x650</td>
//                   </tr>
//                   <tr>
//                     <td>тип:</td>
//                     <td>
//                       <ul className={styles.machine_type_list}>
//                       {node.machineType.edges
//                         ? node.machineType.edges.map(({ node }) => (<li key={node.id}>{node.title}</li>))
//                         : "None"
//                       }
//                       </ul>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td>зона:</td>
//                     <td>{node.address.node.title}</td>
//                   </tr>
//                   </tbody>
//                 </table>
//               </div>  

//               <div className={styles.machine_description} dangerouslySetInnerHTML={{ __html: node.description }}></div>
//             </div>
//             <div className={styles.machine_cover}>
//               <Image
//                 src={node.photo.mediaItemUrl}
//                 blurDataURL="../../blur.png"
//                 placeholder="blur"
//                 layout={"intrinsic"}
//                 width={500}
//                 height={300}
//                 quality='100'
//                 className={styles.machine_cover_img}
//                 alt={node.photo.altText}
//                 loading="lazy"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export async function getStaticProps({ preview = false }) {
//   const allMachines = await getAllMachines();

//   return {
//     props: {
//       allMachines,
//       preview,
//     },
//     revalidate: 10, // In seconds
//   };
// }
