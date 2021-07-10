<template>
  <Layout>
    <div>
      <div class="grid">
        <div class="card">
          <h2><span>Its sick</span></h2>
          <div class="card-text">
            <TypeWriter/>
            <p>Hey My name is Itzik (Musli) Sokolov Paz I'm a Computer science student @ The open university of
              Israel.</p>
            <p>My skills are broad; from hardware to software, from the front end to the back end, from UX to UI, from
              idea to reality. 😉</p>
          </div>
          <div class="card-links">
            <a href="https://www.facebook.com/itzik.musli" title="facebook" alt="facebook" class="fb">
              <i class="fa fa-facebook-square"></i>
            </a>
            <a href="https://www.linkedin.com/in/itzikmusli/" title="linkedin" alt="linkedin" class="lin">
              <i class="fa fa-linkedin"></i>
            </a>


          </div>
        </div>
        <div class="card">
          <h2><span>Code</span></h2>
          <div class="card-text">
            <p>
              I am an experienced full-stack developer, and I have extensive knowledge in a wide array of
              web-technologies.
            </p>
            <p>
              I like to code things from scratch, enjoy bringing ideas to life, and to provide solutions for real issues
              with code.
            </p>
          </div>

          <div class="card-links">
            <a href="https://www.codewars.com/users/PatentLobster">
              <g-image src="@/assets/img/codewars.svg" title="codewars" alt="codewars"/>
            </a>

            <g-link href="https://github.com/PatentLobster/itzik.co">
              <svg xmlns="http://www.w3.org/2000/svg" width="50px" viewBox="0 0 1024 1024" class="git"
                   fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                      transform="scale(54)" fill="black"/>
              </svg>
            </g-link>

          </div>
        </div>
        <div class="card">
          <h2><span>Passion</span></h2>
          <div class="card-text">
            <p> I love programming, learning, (re)inventing, hacking, traveling, flying FPV drones, Linux and gaming.
            </p>
            <p>
              I've always been passionte and enthusiastic for technology and computers, and I have over of 12 years
              experince in programming for recrational use and about 5 of them for professional use.
            </p>
            <p>
              I'm in a constant pursuit of knowledge and I always challenge myself to learn new stuff by doing 🦾
            </p>
          </div>
          <div class="card-links">
            <a href="https://www.youtube.com/channel/UCYZDGnKU0vRA0-8q9sFG3ug" title="youtube" alt="youtube" class="yt">
              <i class="fa fa-youtube"></i>
            </a>

            <a href="https://www.hackthebox.eu/home/users/profile/127846" title="hack the box" alt="hack the box"
               class="yt">
              <i class="fa fa-cube"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
    <cool-table>
      <template #dev>
        <p>I like to code things from scratch and enjoy bringing ideas to life.</p>

        <h4 class="skillh">Languages I speak:</h4>
        <li class="liskill">Python</li>
        <li class="liskill">PHP</li>
        <li class="liskill">Java</li>
        <li class="liskill">C</li>
        <li class="liskill">C++</li>
        <li class="liskill">Rust</li>
        <li class="liskill">CSS3</li>
        <li class="liskill">Sass</li>
        <li class="liskill">JS</li>

        <h4 class="skillh">Backend sauce:</h4>
        <li class="liskill">Apache</li>
        <li class="liskill">Nginx</li>
        <li class="liskill">Docker</li>
        <li class="liskill">Kubernetes</li>
        <li class="liskill">FireBase</li>

        <h4 class="skillh">Databases:</h4>
        <li class="liskill">Postgresql</li>
        <li class="liskill">mongoDB</li>
        <li class="liskill">FireStore</li>
        <li class="liskill">ElasticSearch</li>
        <li class="liskill">MySql</li>
      </template>

      <template #sec>
        <p> I love hacking new systems and to find security vulnerabilities. </p>

        <h4 class="skillh">Sec.Ops:</h4>
        <li>Penetration testing</li>
        <li>Exploits development</li>
        <li>System&App diagnostics and forensics</li>
        <li>Server security</li>
        <li>Signal intelligence</li>
        <li>OSINT</li>
        <li>Hardware RE</li>
        <br/>
        <p> I use my knowledge to develop more secure applications.</p>
      </template>

      <template #etc>
        <p class="skillp">I love to expand my skillset and to keep it diverse. </p>

        <h4 class="skillh">Electronics:</h4>
        <p> I love building devices of all kinds and to learn how stuff work in order to make it work better or to add
          additional functionalities. </p>
        <h4 class="skillh">Drones:</h4>
        <p>there is nothing I love to do more than building, modding and flying my own drones.</p>
      </template>

    </cool-table>

    <div class="card stinker">
      <h2><span>Stinker</span></h2>
      <div class="card-text">
        <p> Stinker is an app for developers that work with the Laravel PHP framework.</p>
        <p> An IDE wrapped around tinker, heavily inspired by Tinkerwell. </p>


        <g-link href="https://github.com/PatentLobster/stinker">
          <svg xmlns="http://www.w3.org/2000/svg" width="50px" viewBox="0 0 1024 1024" class="git"
               fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                  transform="scale(54)"  fill="white" />
          </svg>
        </g-link>
      </div>
      <div class="card-screenshot">
        <g-image src="@/assets/img/stinker_scr.png" title="Stinker" alt="Stinker screenshot" />
      </div>
    </div>

    <div class="card stinker vork">
      <h2 ><span>Vork</span></h2>
      <div class="card-text">
        <p> Vork is a calendar application that logs every login and logout of the computer using electron API and stores it to lightweight Nedb json. Every time you login the application will greet you with a random quote.
        </p>
        <p>
        it helps you to keep track of your active hours and comes useful when you forget to clock in.
        </p>

        <g-link href="https://github.com/PatentLobster/vork">
          <svg xmlns="http://www.w3.org/2000/svg" width="50px" viewBox="0 0 1024 1024" class="git"
               fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                  transform="scale(54)" fill="#1f1c28"/>
          </svg>
        </g-link>
      </div>
      <div class="card-screenshot">
        <g-image src="@/assets/img/vork_scr.png" title="Vork" alt="Vork screenshot" class="vork"/>
      </div>
    </div>
    </div>
  </Layout>
</template>

<script>
import CoolTable from "../components/CoolTable";
import TypeWriter from "../components/TypeWriter";

export default {
  name: "Homepage",
  components: {
    CoolTable,
    TypeWriter
  }
}
</script>
