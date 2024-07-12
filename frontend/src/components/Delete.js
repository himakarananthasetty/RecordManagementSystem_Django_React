import { React, useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
// import { Button } from '@mui/base';
import AxiosInstance from './Axios';
import Dayjs from 'dayjs';
import { useNavigate, useParams } from 'react-router-dom';

const Delete = () => {
    const Myparam = useParams()
    const Myid = Myparam.id
    const [myData, setMydata] = useState()
    const [loading, setLoading] = useState(true)

    const GetData = () => {

        AxiosInstance.get(`project/${Myid}`).then((res) => {
            setMydata(res.data)
            console.log(res.data)
            setLoading(false)
        })

    }
    useEffect(() => {
        GetData();

    }, [])

    const navigate = useNavigate()

    const submission = (data) => {

        AxiosInstance.delete(`project/${Myid}/`).then((res) => {
            navigate(`/`)
        })

    }


    return (
        <div>
            {
                loading ? <p>Loading data....</p> :
                    <div>

                        <Box sx={{ display: 'flex', width: '100%', background: '#0003ff', marginBottom: '10px' }}>
                            <Typography sx={{ marginLeft: '20px', color: '#fff' }}>
                                Delete Project : {myData.name}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', width: '100%', boxShadow: 3, padding: 4, flexDirection: 'column' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'start', marginBottom: '40px' }}>
                                Are you sure to delete the project: {myData.name}

                            </Box>

                            <Box sx={{ width: '30%' }}>

                                <Button variant="contained" onClick={submission} sx={{ width: '100%' }}>
                                    Delete the project
                                </Button>

                            </Box>

                        </Box>
                    </div>}

        </div>
    );
};

export default Delete;
