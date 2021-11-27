<template>
 <div class="header">
    <div class="container">
        <div class="brand"> 
                    <a href="#hero"><h1><span>E</span>lements <span>P</span>ortfolio</h1></a> 
                </div>
                  <h2>{{ contents.name }}</h2>
                <div class="hero">
                    <nav>
                     <ul>
                        <li @click="toggleDetails" ><strong><a href="#">Home</a></strong>{{ contents.home }}</li>
                        <li @click="toggleskill"><strong><a href="#">Skill</a></strong>{{ contents.skill }}</li>
                        <li @click="togglesproject"><strong><a href="#">Projects</a></strong>{{ contents.projects }}</li>
                        <li><strong><a href="#">About</a></strong>{{ contents. about }}</li>
                        <li><strong><a href="#">Contacts</a></strong>{{ contents. contacts }}</li>
                     </ul>
                    </nav>
                </div>
               
                 <!-- Hero tagline & name -->
                    <div class="detail" v-if="detailsAreVisible">
                        <h1>Hello I'm Andrian <span>Elemento</span></h1>
                        <p>Life is like proramming full of exploration and failure mistakes and error <br>
                        but in every error theres always solution to solve the problems and make it better</p>
                                <a href="#" class="download-btn">Download Cv</a>
                    </div>

                     <!--  Skills  -->
                <div class="skill" v-if="skillsvisible">
                <section class="skill-container">
                    <h1>Skil<span>ls</span></h1>
                    <p class="text-1">This is the compilation of my recent projects
                        <br> and eperemints in previous and last semester</p><br>
                    
                    <div class="card">
                        <div class="icon"> 
                            <img src="https://img.icons8.com/bubbles/100/000000/services.png"> 
                        </div> 
                        <h2>C#</h2>
                                <p><br>In C# proramming language I've 
                                learned this when I'm first year student in college<br>
                                but C# language is hard to learned.
                            </p><br>
                    </div><br><br>

                        <div class="card">
                            <div class="icon"> 
                                <img src="https://img.icons8.com/bubbles/100/000000/services.png"> 
                            </div> 
                            <h2>PHP/MySQL</h2>
                               <p><br>In PHP/MySQL<br>
                                I've learned some basic of php&mysql in youtube from different 
                                programming and webdeveloper channel just like freecode camp tagalog tutorial <br>
                                I learned how to connect the php&MySQL in database and how to store a data.
                            </p><br>
                        </div><br><br>
                        
                        <div class="card">
                            <div class="icon"> 
                                <img src="https://img.icons8.com/bubbles/100/000000/services.png"> 
                            </div> 
                            <h2>HTML/CSS</h2>
                                    <p><br>This markup languge<br>
                                    is the most of all that I'm comfortable to learn because it more bit <br>
                                    easier that others, this frontend markup language that 
                                    I've to some youtube tutorial and to the module.
                                </p><br><br>
                        </div>
                  </section>
                </div><br><br>
                <!--  End of skills  -->

                <section>
     <!--  Projects   -->
                <div class="projects" v-if="projectsvisible">
                    <h1>Recent Proje<span>cts</span></h1><br>
                    <p class="text-1">This the compilation of my projects and eperemints in last lesson</p><br>
                    
                        <div class="card" >
                                <h2>Projects 1</h2><br>
                                <p><span><a v-bind:href="vueLink">Monster Slayer</a></span>
                                    <br>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br>
                                    Sint nam facilis commodi laudantium id sequi ipsam ab?
                                    Obcaecati ullam deleniti a dolorum dicta, vitae aperiam sit, aspernatur cum magnam aut!
                                </p>
                        </div><br><br>

                        <div class="card">
                            <h2>Projects 2</h2><br>
                            <p><span>Learning Resources App</span>
                                <br>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br>
                                Sint nam facilis commodi laudantium id sequi ipsam ab?
                                Obcaecati ullam deleniti a dolorum dicta, vitae aperiam sit, aspernatur cum magnam aut!
                            </p>
                        </div><br><br>

                        <div class="card">
                                <h2>Projects 3</h2><br>
                                <p><span>Find a coach web App</span>
                                    <br>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br>
                                    Sint nam facilis commodi laudantium id sequi ipsam ab?
                                    Obcaecati ullam deleniti a dolorum dicta, vitae aperiam sit, aspernatur cum magnam aut!
                                </p>
                        </div> <br><br>

                        <div class="card">
                            <h2>Projects 4</h2><br>
                            <p><span><a v-bind:href="vueLink">List and Conditional Statement</a></span>
                                <br>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br>
                                Sint nam facilis commodi laudantium id sequi ipsam ab?
                                Obcaecati ullam deleniti a dolorum dicta, vitae aperiam sit, aspernatur cum magnam aut!
                            </p>
                    </div>  <br><br>
                        
                            <div class="card">
                                <h2>Projects 5</h2><br>
                                <p><span>Shopping Cart</span>
                                    <br>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br>
                                    Sint nam facilis commodi laudantium id sequi ipsam ab?
                                    Obcaecati ullam deleniti a dolorum dicta, vitae aperiam sit, aspernatur cum magnam aut!
                                </p>
                        </div> <br><br>
                        <div class="card">
                            <h2>Projects 6</h2><br>
                            <p><span>Sending Email Form</span>
                                <br>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br>
                                Sint nam facilis commodi laudantium id sequi ipsam ab?
                                Obcaecati ullam deleniti a dolorum dicta, vitae aperiam sit, aspernatur cum magnam aut!
                            </p>
                       </div> <br><br>
                </div>
                <!--  End of Projects  -->
    </section>
        </div>
    </div>
</template>

    <script>
      export default {
        //   props: [
        //       'home',
        //       'skill',
        //       'projects',
        //       'about',
        //       'contacts',
        //   ],
         data() {
             return {
                 detailsAreVisible: false,
                 skillsvisible: false,
                 projectsvisible: false,
                  contents: {
                      home: '',
                      skill: '',
                      projects: '',
                      about: '',
                      contacts: '',
                  },
             };
         },
         methods: {
             toggleDetails() {
                 this.detailsAreVisible = !this.detailsAreVisible;
             },
             toggleskill() {
                 this.skillsvisible = !this.skillsvisible;
             },
             togglesproject() {
            this.projectsvisible = !this.projectsvisible;
        }
         }
      };
    </script>

    <style>
    .header{
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100vw;
        height: 60px;
        background-color: rgb(18, 216, 123);
        }nav{
    display: flex;
            width: 84;
            margin: auto;
            align-items: center;
            justify-content: space-between;
        }.detail{
   margin-left: 8%;
   margin-top: 13%;
 }.detail h1{
     font-size: 35px;
     color: #212121;
     margin: 20px 30px 30px 20px;
     text-align: inherit;
 }span{
    color: orange;
    }.detail p{
      color: #555;
      line-height: 22px;
      text-align: center;
    }.detail a{
      background-color: transparent;
      padding: 10px 18px;
      text-decoration: none;
      font-weight: bold;
      color: #212121;
      display: inline-block;
      margin: 30px 0;
      border-radius: 10px;
      border: 3px solid rgb(238, 22, 15);
    }.detail a:hover{
      background-color: rgb(37, 238, 144);;
      color: #212121;
    }.projects .skill{
    text-align: center;
   
}.projects .card{
  display: -ms-inline-flexbox;
}
.card{
  display: block;
  max-width: 30rem;
  height: auto;
  margin: 0 auto;
  background-color: #555;
  color: #fff;
  width: 100%;
  text-align: center;
  border-radius: 25px;
}.projects .skill .card p{
    font-size: 10px;
}.skill, .projects h1, p{
    text-align: center;
}.skill-container{
    margin: 3rem auto;
    text-align: center;
    color: rgb(26, 228, 134);
    font-weight: 500;
    padding: 1rem;
    max-width: 30rem;
}
    </style>