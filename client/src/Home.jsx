import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@material-ui/core";

function Home() {
    return (
        <div className='d-flex justify-content-center align-item-center bg-secondary vh-200'>
            <div className='bg-white p-3 round w-75'>
                <h2 className="text-align-center">User Details</h2>
                <TableContainer component={Paper}>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Avatar</TableCell>
                                {/* Render avatar here */}
                            </TableRow>
                            <TableRow>
                                <TableCell>First Name</TableCell>
                                {/* Render first name here */}
                            </TableRow>
                            <TableRow>
                                <TableCell>Last Name</TableCell>
                                {/* Render last name here */}
                            </TableRow>
                            <TableRow>
                                <TableCell>Mobile No</TableCell>
                                {/* Render mobile number here */}
                            </TableRow>
                            <TableRow>
                                <TableCell>Email</TableCell>
                                {/* Render email here */}
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}

export default Home;
