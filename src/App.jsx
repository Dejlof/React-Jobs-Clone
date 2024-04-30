import {
   Route,
   createBrowserRouter, 
   createRoutesFromElements,
   RouterProvider }
 from 'react-router-dom'
import React from 'react'
import Homepage from './pages/Homepage'
import MainLayout from './layouts/MainLayout'
import JobPages from './pages/JobPages'
import NotFoundPage from './pages/NotFoundPage'
import JobPage, {jobLoader} from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'
import EditJobPage from './pages/EditJobPage'

//Add New Job
  const addJob = async(newJob)=>{
    const res = await fetch('/api/jobs',
   {method: 'POST',
    headers:{
      'Content-type':'application/json'},
      body: JSON.stringify(newJob)
    });
    return;   
  };

  //Delete Job
const deleteJob = async(id)=>{
  const res = await fetch(`/api/jobs/${id}`,
   {method: 'DELETE'
    });
    return; 
};

//updateJob
const updateJob = async (job)=>{
  const res = await fetch(`/api/jobs/${job.id}`,
  {method: 'PUT',
   headers:{
     'Content-type':'application/json'},
     body: JSON.stringify(job)
   });
   return;   
}


const router = createBrowserRouter( 
  createRoutesFromElements
  (<Route path='/' element={<MainLayout/>}>
    <Route index element={<Homepage/>}/>
    <Route path='/jobs' element={<JobPages/>}/>
    <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>}/>
    <Route path='/jobs/edit/:id' element={<EditJobPage editJobSubmit={updateJob} />} loader={jobLoader} />
    <Route path='/job/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader} />
    <Route path='*' element={<NotFoundPage/>}/>
    
  </Route>

  )
)


const App = () => {
  return (
  <RouterProvider router={router}/>
  )
}

export default App

