import {useContext} from 'react';
import ShowsContext from '../context/context'
import Card from '../components/Card';


function Dashboard() {
    const showsContext = useContext(ShowsContext);
    const {shows} = showsContext;

    return ( 
        <div className='dashboard'>
            {shows.length > 1 && 
            shows.map(item=>(
                <Card 
                key={item.show.id}
                id={item.show.id}
                image={item.show.image ? item.show.image.medium : 'https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png'}
                name={item.show.name}

                />
            )) 
            }
        </div>
    )
}

export default Dashboard;
