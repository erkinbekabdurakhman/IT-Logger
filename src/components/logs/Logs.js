import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';
import PropTypes from 'prop-types';
import { getLogs } from '../../actions/logAction';

const Log = ({ log: { logs, loading }, getLogs }) => {
    useEffect(() => {
        getLogs();
        //eslint-disable-nextline
    }, [])

    if(loading || logs === null ){
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

Log.propTypes = {
    log: PropTypes.object.isRequired,
    getLogs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    log: state.log
});

export default connect(mapStateToProps, { getLogs })(Log);