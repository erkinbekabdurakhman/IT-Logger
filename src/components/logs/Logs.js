import React, { useState, useEffect } from 'react';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';

const Log = () => {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getLogs();
        //eslint-disable-nextline
    }, [])

    const getLogs = async () => {
        setLoading(true);

        const res = await fetch('http://localhost:5000/logs');
        const data = await res.json();
        
        setLogs(data);
        setLoading(false);
    }

    if(loading){
        return <Preloader />
    } else {
        return(
            <ul className="collection with-header">
                <li className="collection-header">
                    <h4 className="center">System Fuckups</h4>
                </li>
                { !loading && logs.length === 0 ? (
                    <p className="center">No fuckups to show</p>
                ) :(
                    logs.map(log => <LogItem key={log.id} log={log} />)
                )}
            </ul>
        )
    }
    
}

export default Log;