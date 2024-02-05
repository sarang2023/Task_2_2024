function Home()
{
    return(
    <div className="mb-5">
        <div class="container text-center">
  <div class="row">
    <div class="col-auto me-auto">
    <div class="d-flex flex-row mb-3 text-light fw-bold">
  <div class="p-2">Events</div>
  <div class="p-2">Activities</div>
  <div class="p-2">Events</div>
  
</div>
    </div>
    <div class="col-auto">
      <div class="d-flex flex-row mb-3 text-light fw-bold">
  <div class="p-2">List Your Show</div>
  <div class="p-2">Offers</div>
  <div class="p-2">Gift Cards</div>
</div></div>
  </div>
  </div>
  <div class="container text-center text-light ">
  
  <div class="row">
    
    <div class="col">
    <div id="carouselExample" class="carousel slide ">
  <div class="carousel-inner rounded-5 "style={{"height":"400px","width":"90%","margin":"auto"}}>
    <div class="carousel-item active">
      <img src="https://mir-s3-cdn-cf.behance.net/projects/404/73bf6c184364321.Y3JvcCwxNjcyLDEzMDgsNzkwLDEwNw.jpg" class="d-block w-100"style={{"height":"400px"}} alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.himalayanadventuretrips.com/wp-content/uploads/2022/02/events.jpg" class="d-block w-100"style={{"height":"400px"}} alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1562329265-95a6d7a83440?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100"style={{"height":"400px"}} alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
    
  </div>
</div>

<div class="container text-center text-light mt-5">
 
  <div class="row">
    <div class="col-md-6 offset-md-3 d-lg-none d-md-none">

    <div class="card bg-transparent">
  <div class="card-body">
  <div class="input-group mb-3">
  <button class="btn btn-outline-secondary rounded-start-5 " type="button" id="button-addon1"><i class="bi bi-search text-white"></i></button>
  <input type="text" class="form-control bg-dark text-white rounded-end-5" placeholder="Search for Events,Plays and Activities" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
</div>

  </div>
</div>
    </div>
  </div>
</div>

<div class="container text-center text-light">
  <div class="row ">
    <div class="col d-flex justify-content-end">
    <div class="d-flex flex-row mb-3 fs-3">
  <div class="p-2 text-decoration-underline">See all</div>
  <div class=""><button type="button" class="btn">
    <i class="bi bi-arrow-up-right-circle-fill colors fs-3"></i></button></div>
  
</div>

    </div>
   
   
  </div>
</div>



<div class="container text-light mt-3">
  <div class="row align-items-start">
    
  
    <div class="col">
    <div class="row">
  <div class="col-sm-3 mb-3 mb-sm-0 ">
    <div class="card rounded-5">
      <div class="card-body bg-d1 rounded-5">

      <div class="d-flex flex-row mb-3">
  <div class=""> <img src="celebration.png" class="img-fluid " style={{"width":"70px"}}alt="..."/></div>
  <div class="p-2 fs-5"> <p class="card-text text-light">Celebration Events</p></div>
  
</div>
       
        
       
      </div>
    </div>
  </div>
  <div class="col-sm-3  mb-3">
    <div class="card rounded-5">
      <div class="card-body bg-d1 rounded-5">

         <div class="d-flex flex-row mb-3">
  <div class=""> <img src="theater.png" class="img-fluid"style={{"width":"70px"}} alt="..."/></div>
  <div class="p-2 fs-4"> <p class="card-text text-light">Comedy Events</p></div>
  
</div>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card rounded-5">
      <div class="card-body bg-d1 rounded-5">
      <div class="d-flex flex-row mb-3">
  <div class=""> <img src="instruments.png" class="img-fluid"style={{"width":"70px"}} alt="..."/></div>
  <div class="p-2 fs-3"> <p class="card-text text-light">Music Events</p></div>
  
</div>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card rounded-5">
      <div class="card-body bg-d1 rounded-5">
      <div class="d-flex flex-row mb-3">
  <div class=""> <img src="menu.png" class="img-fluid"style={{"width":"70px"}} alt="..."/></div>
  <div class="p-2 fs-3"> <p class="card-text text-light">Food Events</p></div>
  
</div>
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
</div>







<div class="container text-light mt-5">
  <div class="row align-items-start">
    <div class="col">
    <p class="h2"><i class="bi bi-bookmark-star-fill"></i>Recommended Events</p>
    <div class="row">
  <div class="col-sm-3 mb-3 mb-sm-0 mt-3">
    <div class="card  back">
      <div class="card-body card-body1">
        <h5 class="card-title "><button type="button" class="btn btn-danger mt-2 fw-bold"style={{ backgroundColor: "orangered","width":"80px" }}>Music</button>
</h5>
       
       
        
      </div>
      <div className="card-footer bg-dark">
      <div class="container-fluid">
  <div class="row align-items-start ">
   
    
    <div class="col">
    <div class="d-flex flex-row justify-content-around ">
  <div class=" text-light">
  <div class="d-flex flex-column ">
  <div class=" c fw-bold"> 07</div>
  <div class="fw-bold">oct</div>
  
</div>

    </div>
  <div class=" text-light">
  <div class="d-flex flex-column border-start">
  <div class="fw-bold"> 07 Glasgow</div>
  <div class="fw-bold">International</div>
  
</div> </div>
 
</div>
    </div>
  </div>
</div>



<div class="d-flex flex-row text-light justify-content-between border rounded-3 p-1 bg-black">
  <div class="fw-bold purple">₹ 550 Onwards

  </div>
  <div class=""><button type="button" class="btn btn-sm text-light"style={{ backgroundColor: "rgba(211, 86, 225, 0.951)" }}>Buy Now</button>
</div>
  
</div>

       </div>
    </div>
  </div>








   <div class="col-sm-3 mb-3 mb-sm-0 mt-3">
    <div class="card  back1">
      <div class="card-body card-body1">
        <h5 class="card-title "><button type="button" class="btn btn-danger mt-2 fw-bold"style={{ backgroundColor: "orangered","width":"90px" }}>Comedy</button>
</h5>
       
       
        
      </div>
      <div className="card-footer bg-dark">
      <div class="container-fluid">
  <div class="row align-items-start ">
   
    
    <div class="col">
    <div class="d-flex flex-row justify-content-around ">
  <div class=" text-light">
  <div class="d-flex flex-column ">
  <div class=" c fw-bold"> 07</div>
  <div class="fw-bold">oct</div>
  
</div>

    </div>
  <div class=" text-light">
  <div class="d-flex flex-column border-start">
  <div class="fw-bold"> 07 Glasgow</div>
  <div class="fw-bold">International</div>
  
</div> </div>
 
</div>
    </div>
  </div>
</div>



<div class="d-flex flex-row text-light justify-content-between border rounded-3 p-1 bg-black">
  <div class="fw-bold purple">₹ 550 RSVP

  </div>
  <div class=""><button type="button" class="btn btn-sm text-light"style={{ backgroundColor: "rgba(211, 86, 225, 0.951)" }}>Buy Now</button>
</div>
  
</div>

       </div>
    </div>
  </div>






  <div class="col-sm-3 mb-3 mb-sm-0 mt-3">
    <div class="card  back2">
      <div class="card-body card-body1">
        <h5 class="card-title "><button type="button" class="btn btn-danger mt-2 fw-bold"style={{ backgroundColor: "orangered","width":"80px" }}>Food</button>
</h5>
       
       
        
      </div>
      <div className="card-footer bg-dark">
      <div class="container-fluid">
  <div class="row align-items-start ">
   
    
    <div class="col">
    <div class="d-flex flex-row justify-content-around ">
  <div class=" text-light">
  <div class="d-flex flex-column ">
  <div class=" c fw-bold"> 07</div>
  <div class="fw-bold">oct</div>
  
</div>

    </div>
  <div class=" text-light">
  <div class="d-flex flex-column border-start">
  <div class="fw-bold"> 07 Glasgow</div>
  <div class="fw-bold">International</div>
  
</div> </div>
 
</div>
    </div>
  </div>
</div>



<div class="d-flex flex-row text-light justify-content-between border rounded-3 p-1 bg-black">
  <div class="fw-bold purple">₹ 550 Onwards

  </div>
  <div class=""><button type="button" class="btn btn-sm text-light"style={{ backgroundColor: "rgba(211, 86, 225, 0.951)" }}>Buy Now</button>
</div>
  
</div>

       </div>
    </div>
  </div>






  <div class="col-sm-3 mb-3 mb-sm-0 mt-3">
    <div class="card  back3">
      <div class="card-body card-body1">
        <h5 class="card-title "><button type="button" class="btn btn-danger mt-2 fw-bold"style={{ backgroundColor: "orangered" }}>Celebrations</button>
</h5>
       
       
        
      </div>
      <div className="card-footer bg-dark">
      <div class="container-fluid">
  <div class="row align-items-start ">
   
    
    <div class="col">
    <div class="d-flex flex-row justify-content-around ">
  <div class=" text-light">
  <div class="d-flex flex-column ">
  <div class=" c fw-bold"> 07</div>
  <div class="fw-bold">oct</div>
  
</div>

    </div>
  <div class=" text-light">
  <div class="d-flex flex-column border-start">
  <div class="fw-bold"> 07 Glasgow</div>
  <div class="fw-bold">International</div>
  
</div> </div>
 
</div>
    </div>
  </div>
</div>



<div class="d-flex flex-row text-light justify-content-between border rounded-3 p-1 bg-black">
  <div class="fw-bold purple">₹ 550 RSVP

  </div>
  <div class=""><button type="button" class="btn btn-sm text-light"style={{ backgroundColor: "rgba(211, 86, 225, 0.951)" }}>Buy Now</button>
</div>
  
</div>

       </div>
    </div>
  </div>

</div>
    </div>
    
    
  </div>
</div>




















<div class="container-fluid text-light mt-5 bg-black rounded-5">
  <div class="row align-items-start">
    <div class="col mb-5">
    <p class="h2 mx-5 mt-3 mb-3"><i class="fa-solid fa-champagne-glasses"></i>Outdoor Events</p>
   





<div class="row row-cols-1 row-cols-md-4 ">
  <div class="col d-flex justify-content-center">
    <div class="card back4">
      <div class="card-body card-body2">
        <h5 class="card-title "><button type="button" class="btn btn-danger mt-2 fw-bold"style={{ backgroundColor: "orangered","width":"80px" }}>Music</button>
</h5>
       
       
        
      </div>
      <div className="card-footer bg-dark">
      <div class="container-fluid">
  <div class="row align-items-start ">
   
    
    <div class="col">
    <div class="d-flex flex-row justify-content-around ">
  <div class=" text-light">
  <div class="">
  <p class="m-0 fw-bold">Good Boy Better Show by</p>
  <p class="m-0 fw-bold">Aashish Solanki</p>
  <p class=""><i class="bi bi-geo-alt"></i>78 Vijay Nagar Indore</p>
 
  
</div>

    </div>
  
 
</div>
    </div>
  </div>
</div>

<div class="d-flex flex-row text-light justify-content-between border rounded-3 p-1 bg-black">
  <div class="fw-bold purple">₹ 550 Onwards

  </div>
  <div class=""><button type="button" class="btn btn-sm text-light"style={{ backgroundColor: "rgba(211, 86, 225, 0.951)" }}>Buy Now</button>
</div>
  
</div>

       </div>
    </div>
  </div>
  <div class="col d-flex justify-content-center">
  <div class="card back5">
      <div class="card-body card-body2">
        <h5 class="card-title "><button type="button" class="btn btn-danger mt-2 fw-bold"style={{ backgroundColor: "orangered" }}>Comedy</button>
</h5>
       
       
        
      </div>
      <div className="card-footer bg-dark">
      <div class="container-fluid">
  <div class="row align-items-start ">
   
    
    <div class="col">
    <div class="d-flex flex-row justify-content-around ">
  <div class=" text-light">
  <div class="">
  <p class="m-0 fw-bold">Baap Ko Mat Sikha- by</p>
  <p class="m-0 fw-bold">Pranit More</p>
  <p class=""><i class="bi bi-geo-alt"></i>78 Vijay Nagar Indore</p>
 
  
</div>

    </div>
  
 
</div>
    </div>
  </div>
</div>

<div class="d-flex flex-row text-light justify-content-between border rounded-3 p-1 bg-black">
  <div class="fw-bold purple">₹ 550 Onwards

  </div>
  <div class=""><button type="button" class="btn btn-sm text-light"style={{ backgroundColor: "rgba(211, 86, 225, 0.951)" }}>Buy Now</button>
</div>
  
</div>

       </div>
    </div>
  </div>
  <div class="col d-flex justify-content-center">
  <div class="card back6">
      <div class="card-body card-body2">
        <h5 class="card-title "><button type="button" class="btn btn-danger mt-2 fw-bold"style={{ backgroundColor: "orangered" }}>Food</button>
</h5>
       
       
        
      </div>
      <div className="card-footer bg-dark">
      <div class="container-fluid">
  <div class="row align-items-start ">
   
    
    <div class="col">
    <div class="d-flex flex-row justify-content-around ">
  <div class=" text-light">
  <div class="">
  <p class="m-0 fw-bold">Samay Raina Unfiltered-</p>
  <p class="m-0 fw-bold">India Tour</p>
  <p class=""><i class="bi bi-geo-alt"></i>78 Vijay Nagar Indore</p>
 
  
</div>

    </div>
  
 
</div>
    </div>
  </div>
</div>

<div class="d-flex flex-row text-light justify-content-between border rounded-3 p-1 bg-black">
  <div class="fw-bold purple">₹ 550 Onwards

  </div>
  <div class=""><button type="button" class="btn btn-sm text-light"style={{ backgroundColor: "rgba(211, 86, 225, 0.951)" }}>Buy Now</button>
</div>
  
</div>

       </div>
    </div>
  </div>
  <div class="col d-flex justify-content-center">
  <div class="card back7">
      <div class="card-body card-body2">
        <h5 class="card-title "><button type="button" class="btn btn-danger mt-2 fw-bold"style={{ backgroundColor: "orangered" }}>Celebrations</button>
</h5>
       
       
        
      </div>
      <div className="card-footer bg-dark">
      <div class="container-fluid">
  <div class="row align-items-start ">
   
    
    <div class="col">
    <div class="d-flex flex-row justify-content-around ">
  <div class=" text-light">
  <div class="">
  <p class="m-0 fw-bold">Kisi Ko Batana Mat Ft.</p>
  <p class="m-0 fw-bold">Anubhav Singh Bassi</p>
  <p class=""><i class="bi bi-geo-alt"></i>78 Vijay Nagar Indore</p>
 
  
</div>

    </div>
  
 
</div>
    </div>
  </div>
</div>

<div class="d-flex flex-row text-light justify-content-between border rounded-3 p-1 bg-black">
  <div class="fw-bold purple">₹ 550 Onwards

  </div>
  <div class=""><button type="button" class="btn btn-sm text-light"style={{ backgroundColor: "rgba(211, 86, 225, 0.951)" }}>Buy Now</button>
</div>
  
</div>

       </div>
    </div>
  </div>
</div>





    </div>
    
    
  </div>
</div>


<div class="container text-light mt-5">
  <div class="row align-items-start">
   
   
    <div class="col">
    <p class="fs-2 fw-bolder">Featured Events</p>
    </div>
  </div>
</div>















<div class="container-fluid text-center">
  <div class="row align-items-start">
    <div class="col">
    <div class="card bg-black m-2 rounded-5">
    <div class="container text-center">
  <div class="row align-items-start">
    <div class="col">
    <div class="d-flex flex-column mb-5 mt-5 p-5">
  <div class="h2 text-light">Dinner Party of</div>
  <div class="h2 text-light">Luis Family</div>
  <div class="pt-5 ">
    <button type="button" class="btn text-light btn-lg "style={{ backgroundColor: "rgba(211, 86, 225, 0.951)","width":"200px" }}>Book Ticket</button></div>
</div>
    </div>
    <div class="col">
    <div class="d-flex flex-column mb-5 mt-5 p-5">
  <div class="h6 text-light">Starts in</div>
  <div class="h2 text-light">10<span className="border-end">&nbsp;</span>06<span className="border-end">&nbsp;</span>35<span className="border-end">&nbsp;</span>42</div>
  <div class="h2 text-light"><hr class="border border-light border-1 opacity-50"></hr>
</div>
<div class="d-flex flex-row text-light">
  <div class=""><i class="bi bi-geo-alt"></i></div>
  <div class="mx-1">West Harleyborough,UK</div>
  
</div>
<div class="d-flex flex-row text-light">
  <div class=""><i class="bi bi-clock"></i></div>
  <div class="mx-1">12:30pm GMT</div>
  
</div>

</div>
    </div>
    
  </div>
</div>
    </div>
    </div>
    <div class="col pos">
    <div class="card rounded-5 d-none d-md-block position mt-5">
    <img src="https://courtneyoutloud.files.wordpress.com/2010/12/nye-tablescape-006.jpg" class="card-img-top rounded-5 " alt="..."/>
    
  </div>
    </div>
    
  </div>
</div>




<div class="container text-light mt-5">
  <div class="row align-items-start">
   
   
    <div class="col">
    <p class="fs-2 fw-bolder">Events This Week</p>
    </div>
  </div>
</div>


<div class="container text-light mt-3">
  <div class="row align-items-start">
    
  
    <div class="col">
    <div class="row">
  <div class="col-sm-3 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body bg-d rounded-2">
        <h5 class="card-title"style={{"color":"violet"}}>Today</h5>
        
        <p class="card-text text-light">Wed, 10 Jan</p>
      </div>
    </div>
  </div>
  <div class="col-sm-3  mb-3">
    <div class="card">
      <div class="card-body bg-d rounded-2">
        <h5 class="card-title"style={{"color":"violet"}}>Tomorrow</h5>
        <p class="card-text text-light">Thu, 11 Jan</p>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body bg-d rounded-2">
        <h5 class="card-title"style={{"color":"violet"}}>Weekend</h5>
        <p class="card-text text-light">13-14 Jan</p>
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
</div>















<div class="container text-light mt-5">
  <div class="row align-items-start">
    <div class="col">
    <p class="h2">Events You Join</p>
    <div class="row">
  








   <div class="col-sm-4 mb-3 mb-sm-0 mt-3">
    <div class="card back8">
      <div class="card-body card-body1">
     
       
       
        
      </div>
      <div className="card-footer bg-dark">
      <div class="container-fluid">
  <div class="row align-items-start ">
   
    
    <div class="col">
    <div class="d-flex flex-row justify-content-around ">
  <div class=" text-light">
  <div class="d-flex flex-column ">
  <div class=" c fw-bold"> 07</div>
  <div class="fw-bold">oct</div>
  
</div>

    </div>
  <div class=" text-light">
  <div class="d-flex flex-column border-start">
  <div class="fw-bold"> 07 Glasgow</div>
  <div class="fw-bold">International</div>
  
</div> </div>
 
</div>
    </div>
  </div>
</div>



<div class="d-flex flex-row text-light justify-content-between border rounded-3 p-1 bg-black">
  <div class="fw-bold purple">₹ 550 Onwards

  </div>
  <div class=""><button type="button" class="btn btn-sm text-light"style={{ backgroundColor: "rgba(211, 86, 225, 0.951)" }}>Buy Now</button>
</div>
  
</div>

       </div>
    </div>
  </div>






  <div class="col-sm-4 mb-3 mb-sm-0 mt-3">
    <div class="card  back3">
      <div class="card-body card-body1">
      

       
       
        
      </div>
      <div className="card-footer bg-dark">
      <div class="container-fluid">
  <div class="row align-items-start ">
   
    
    <div class="col">
    <div class="d-flex flex-row justify-content-around ">
  <div class=" text-light">
  <div class="d-flex flex-column ">
  <div class=" c fw-bold"> 07</div>
  <div class="fw-bold">oct</div>
  
</div>

    </div>
  <div class=" text-light">
  <div class="d-flex flex-column border-start">
  <div class="fw-bold"> 07 Glasgow</div>
  <div class="fw-bold">International</div>
  
</div> </div>
 
</div>
    </div>
  </div>
</div>



<div class="d-flex flex-row text-light justify-content-between border rounded-3 p-1 bg-black">
  <div class="fw-bold purple">₹ 550 Onwards

  </div>
  <div class=""><button type="button" class="btn btn-sm text-light"style={{ backgroundColor: "rgba(211, 86, 225, 0.951)" }}>Buy Now</button>
</div>
  
</div>

       </div>
    </div>
  </div>






  <div class="col-sm-4 mb-3 mb-sm-0 mt-3">
    <div class="card back8">
      <div class="card-body card-body1">
       
       
       
        
      </div>
      <div className="card-footer bg-dark">
      <div class="container-fluid">
  <div class="row align-items-start ">
   
    
    <div class="col">
    <div class="d-flex flex-row justify-content-around ">
  <div class=" text-light">
  <div class="d-flex flex-column ">
  <div class=" c fw-bold"> 07</div>
  <div class="fw-bold">oct</div>
  
</div>

    </div>
  <div class=" text-light">
  <div class="d-flex flex-column border-start">
  <div class="fw-bold"> 07 Glasgow</div>
  <div class="fw-bold">International</div>
  
</div> </div>
 
</div>
    </div>
  </div>
</div>



<div class="d-flex flex-row text-light justify-content-between border rounded-3 p-1 bg-black">
  <div class="fw-bold purple">₹ 550 Onwards

  </div>
  <div class=""><button type="button" class="btn btn-sm text-light"style={{ backgroundColor: "rgba(211, 86, 225, 0.951)" }}>Buy Now</button>
</div>
  
</div>

       </div>
    </div>
  </div>

</div>
    </div>
    
    
  </div>
</div>


<div class="container text-light mt-5">
  <div class="row align-items-start">
   
   
    <div class="col">
    <p class="fs-2 fw-bolder">Stories</p>
    </div>
  </div>
</div>





<div class="container text-light">
  <div class="row align-items-start">
    <div class="col d-flex flex-column">
    <div class="">
      <img src="https://c1.wallpaperflare.com/preview/557/1021/152/lightshow-live-stage-show.jpg"width={120}height={120} class="rounded-circle border border-2 border-light" alt="..."/></div>
  <div class="mx-3">Best Seller</div>
    
    </div>
    <div class="col d-flex flex-column">
    <div class=""><img src="https://en.pimg.jp/073/943/620/1/73943620.jpg"width={120}height={120} class="rounded-circle border border-2 border-light" alt="..."/></div>
  <div class="mx-4">Customer</div>
    </div>
    <div class="col d-flex flex-column">
    <div class=""><img src="https://c1.wallpaperflare.com/preview/557/1021/152/lightshow-live-stage-show.jpg"width={120}height={120} class="rounded-circle border border-2 border-light" alt="..."/></div>
  <div class="mx-3">Best Seller</div>
    </div>
    <div class="col d-flex flex-column">
    <div class=""><img src="https://en.pimg.jp/073/943/620/1/73943620.jpg"width={120}height={120} class="rounded-circle border border-2 border-light" alt="..."/></div>
  <div class="mx-4">Customer</div>
    </div>
    <div class="col d-flex flex-column">
    <div class="">
      <img src="https://c1.wallpaperflare.com/preview/557/1021/152/lightshow-live-stage-show.jpg"width={120}height={120} class="rounded-circle border border-2 border-light" alt="..."/></div>
  <div class="mx-3">Best Seller</div>
    </div>
    <div class="col d-flex flex-column">
    <div class=""><img src="https://en.pimg.jp/073/943/620/1/73943620.jpg"width={120}height={120} class="rounded-circle border border-2 border-light" alt="..."/></div>
  <div class="mx-4">Customer</div>
    </div>

  </div>
</div>



<div class="container text-light mt-5">
  <div class="row align-items-start">
   
   
    <div class="col">
    <p class="fs-2 fw-bolder">Magazine</p>
    </div>
  </div>
</div>

<div class="container text-center">
  <div class="row align-items-start">
    
   
    <div class="col">
    <div class="card-group">
      
    <div class="card mx-2 back9 rounded-3 border border-0">
 
 <div class="card-body card-body3 ">
   <h5 class="card-title d-flex justify-content-start"><button type="button" class="btn btn-danger fw-bold "style={{ backgroundColor: "orangered","width":"80px" }}>Dance</button></h5>
   
 </div>
 <div class="card-footer">
   <small class="text-light fw-bold fs-5">Put on your shoes'cause we're going dancing,again!</small>
 </div>
</div>



  <div class="card mx-2 back10 rounded-3 border border-0">
 
    <div class="card-body card-body3">
      <h5 class="card-title d-flex justify-content-start"><button type="button" class="btn btn-danger fw-bold "style={{ backgroundColor: "orangered"}}>Workshop</button></h5>
      
    </div>
    <div class="card-footer">
      <small class="text-light fw-bold fs-5">Cakes,Cartoons,Crafts,Create something with digital workshops!</small>
    </div>
  </div>



  <div class="card mx-2 back11 rounded-3 border border-0">
 
    <div class="card-body card-body3">
      <h5 class="card-title d-flex justify-content-start"><button type="button" class="btn btn-danger fw-bold "style={{ backgroundColor: "orangered","width":"80px" }}>Food</button></h5>
      
    </div>
    <div class="card-footer">
      <small class="text-light fw-bold fs-5">Bake,brew and barbeque with interavtive online food workshops!</small>
    </div>
  </div>

  
  <div class="card mx-2 back12 rounded-3 border border-0">
 
 <div class="card-body card-body3">
   <h5 class="card-title d-flex justify-content-start"><button type="button" class="btn btn-danger fw-bold "style={{ backgroundColor: "orangered"}}>Private Parties</button></h5>
   
 </div>
 <div class="card-footer">
   <small class="text-light fw-bold fs-5">9 Creative Virtual Birthday Party Ideas</small>
 </div>
</div>
</div>
    </div>
  </div>
</div>









<div class="container text-light mt-5">
  <div class="row align-items-start">
    
  
    <div class="col">
    <div class="row">
  <div class="col-sm-1 mb-3 mb-sm-0 ">
    <div class="card rounded-5 "style={{"width":"120px"}}>
      <div class=" bg-dark bg-gradient rounded-5  ">
        <h5 class="card-title text-center text-light p-1">AD</h5>
        
        
      </div>
    </div>
  </div>
  
  
</div>
    </div>
  </div>
</div>



<div class="container text-light mt-3">
  <div class="row align-items-start">
    <div class="col">
    <div class="row">
 
    <div class="card-group">
  <div class="card bg-warning">
    




    <div class="card-body">
      <h4 class="card-title fw-bold"><i class="fa-regular fa-moon fs-3"></i>MOON EVENT</h4>
      <div class="d-flex flex-column">
  <div class=""><h1 class="fw-bold lh-1">SUMMER</h1></div>
  <div class=""><h2 class="card-title fw-medium">Special</h2></div>
</div>
      
      
<div class="container ">
  <div class="row align-items-start">
   
    
    <div class="col">
    <div class="row">
  <div class="col-sm-9 mb-3 mb-sm-0 ">
    <div class="card bg-transparent border border-0">
      <div class="card-body card-h ">
        
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, reiciendis? Voluptates quisquam iste commodi laboriosam sapiente repudiandae unde, dolores assumenda!</p>
      </div>
    </div>
  </div>
  <div class="col-sm-3 ">
    <div class="card bg-transparent border border-white border-5">
      <div class="card-body">
        
        <h1 class="card-title fs">20</h1>

        <h1 class="card-title">AUG</h1>
        <h5 class="card-title mt-3 ">2018</h5>
        
      
        
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
</div>
      
    </div>
  </div>
  <div class="card back13">
    
    <div class="card-body">
     
      
    </div>  
    <div class="card-footer">

    <div class="container text-center">
  <div class="row">
    <div class="col-md-4 mt-5"><button type="button" class="btn btn-light fw-bold">REGISTER NOW</button>
</div>
    <div class="col-md-4 offset-md-4"><img src="https://cdn3.vectorstock.com/i/1000x1000/74/57/discount-up-to-50-percent-off-speech-bubble-vector-26247457.jpg"width={100}height={100} class="rounded-circle border border-2 border-light" alt="..."/></div>
  </div>
  </div>
    
</div>
  

<div class="">


 </div>
  </div>
 
</div>
</div>
    </div>
   
    
  </div>
</div>

    </div>)
}
export default Home;