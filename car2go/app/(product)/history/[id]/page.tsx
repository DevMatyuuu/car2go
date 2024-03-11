'use client'

import Navbar from '@/components/Navbar'
import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import useHistory from '@/hooks/useHistory'

interface Props {
  params: {
      id: string;
  };
}

export default function History({params} : Props) {

  const { histories } = useHistory();

  const paramsId = params.id;


  const userHistory = histories.filter(item => item.uid === paramsId)

  return (
    <>
    <Navbar />
    <div className='flex flex-col pt-48 h-screen px-48 gap-12'>
      <div className='text-5xl text-primary'>
        History
      </div>
      <div>
        <Table>
          <TableCaption>Your existing rents</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px] h-[50px]">Image</TableHead>
              <TableHead className='w-[250px] h-[50px]'>Title</TableHead>
              <TableHead className='w-[250px] h-[50px]'>Pick-up Date</TableHead>
              <TableHead className='w-[150px] h-[50px]'>Return Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {userHistory.map((history) => (
              <TableRow key={history.id}>
                <TableCell className="w-[250px] h-[50px]">
                  <img src={history.image} className='w-[150px]'/>
                </TableCell>
                <TableCell className='w-[150px] h-[50px]'>{history.title}</TableCell>
                <TableCell className='w-[150px] h-[50px]'>{history.pickUp}</TableCell>
                <TableCell className='w-[150px] h-[50px]'>{history.return}</TableCell>
                <TableCell className="text-right">₱{history.Price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
    </>
  )
}
