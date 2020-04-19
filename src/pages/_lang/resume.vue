<template>
  <div id="main">
    <article class="post">
      <header>
        <div class="title">
          <h2>{{ $t('resume.title') }}</h2>
        </div>
      </header>
      <section>
        <blockquote>
          {{ $t('resume.quote') }}
        </blockquote>
      </section>
      <section>
        <h2>{{ $t('resume.skillsword') }}</h2>
        <div class="row">
          <div class="col-6 col-12-medium">
            <h4>{{ $t('resume.skills.technical') }}</h4>
            <ul>
              <li>{{ $t('resume.skills.POO') }}</li>
              <li>{{ $t('resume.skills.mobile') }}</li>
              <li>{{ $t('resume.skills.backend') }}</li>
              <li>{{ $t('resume.skills.frontend') }}</li>
              <li>{{ $t('resume.skills.embedded') }}</li>
              <li>{{ $t('resume.skills.networkandsecurity') }}</li>
              <li>{{ $t('resume.skills.UML') }}</li>
              <li>{{ $t('resume.skills.management') }}</li>
            </ul>
          </div>
          <div class="col-6 col-12-medium">
            <h4>{{ $t('resume.skills.languages') }}</h4>
            <ul>
              <li>{{ $t('resume.skills.french') }}</li>
              <li>{{ $t('resume.skills.english') }}</li>
              <li>{{ $t('resume.skills.japanese') }}</li>
            </ul>
            <h4>{{ $t('resume.skills.others') }}</h4>
            <ul>
              <li>{{ $t('resume.skills.PSE1') }}</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h2>{{ $t('resume.experience.word') }}</h2>
        <div class="table-wrapper">
          <table class="alt">
            <tbody>
              <tr>
                <td>11/2018 - {{ $t('today') }}</td>
                <td>
                  <h3>{{ $t('resume.experience.concord.title') }}</h3>
                  <span><i>Concord</i></span>
                  <!-- <p v-html="$t('resume.experience.kasetsart2018.description')"></p> -->
                </td>
              </tr>
              <tr>
                <td>09/2018 - 03/2018</td>
                <td>
                  <h3>{{ $t('resume.experience.kasetsart2018.title') }}</h3>
                  <span><i>Kasetsart University</i></span>
                  <p v-html="$t('resume.experience.kasetsart2018.description')"></p>
                </td>
              </tr>
              <tr>
                <td>05/2016 - 04/2016</td>
                <td>
                  <h3>{{ $t('resume.experience.panga.title') }}</h3>
                  <span><i>Panga</i></span>
                  <p v-html="$t('resume.experience.panga.description')"></p>
                </td>
              </tr>
              <tr>
                <td>06/2015 - 04/2015</td>
                <td>
                  <h3>{{ $t('resume.experience.kasetsart2015.title') }}</h3>
                  <span><i>Kasetsart University</i></span>
                  <p v-html="$t('resume.experience.kasetsart2015.description')"></p>
                </td>
              </tr>
              <tr>
                <td>04/2015 - 10/2014</td>
                <td>
                  <h3>{{ $t('resume.experience.serli.title') }}</h3>
                  <span><i>Serli</i></span>
                  <p v-html="$t('resume.experience.serli.description')"></p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section>
        <h2>{{ $t('resume.education.word') }}</h2>
        <div class="table-wrapper">
          <table class="alt">
            <tbody>
              <tr>
                <td>09/2018 - 10/2017</td>
                <td>
                  <h3>{{ $t('resume.education.master.title') }}</h3>
                  <p v-html="$t('resume.education.master.description')" class="less-space-after"></p>
                  <div class="toggle-details"><a>+ details</a></div>
                  <div class="details">
                    <ul>
                      <li>MI3.01 : Mobile Programming</li>
                      <li>MI3.02 : Cloud and Big Data</li>
                      <li>MI3.11 : Data Mining</li>
                      <li>MI3.12 : Data Exploitation</li>
                      <li>MI3.13 : Research Courses</li>
                      <li>MI4.01 : Internship</li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>06/2017 - 09/2016</td>
                <td>
                  <h3>{{ $t('resume.education.maitrise.title') }}</h3>
                  <p v-html="$t('resume.education.maitrise.description')" class="less-space-after"></p>
                  <div class="toggle-details"><a>+ details</a></div>
                  <div class="details">
                    <ul>
                      <li>Independant Study</li>
                      <li>Software Development</li>
                      <li>Network Security</li>
                      <li>Mobile Application Development</li>
                      <li>Neural Networks</li>
                      <li>Expert Systems</li>
                      <li>Research Methodology</li>
                      <li>Project Management</li>
                      <li>MsC Project</li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>06/2016 - 09/2015</td>
                <td>
                  <h3>{{ $t('resume.education.licence.title') }}</h3>
                  <p v-html="$t('resume.education.licence.description')" class="less-space-after"></p>
                  <div class="toggle-details"><a>+ details</a></div>
                  <div class="details">
                    <ul>
                      <li>ANG-12508C/ANG-12607C : Langue vivante - Anglais</li>
                      <li>GIF-12502C : Développement micro controleurs</li>
                      <li>GIF-12601C : Simulation de systèmes</li>
                      <li>ENV-12512C : Environnement et développement durable en informatique</li>
                      <li>INFO-12501C : Programmation logique</li>
                      <li>INFO-12504C : Structures de données avancées-prog C++</li>
                      <li>INFO-12505C : Base de données</li>
                      <li>INFO-12507C : Etude de cas</li>
                      <li>INFO-12604C : Compilation</li>
                      <li>INFO-12605C : Interface homme-machine</li>
                      <li>INFO-12606C : Génie logiciel</li>
                      <li>STAG-O-12608C : Stage d'observation et de pratiques accompagnées</li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>06/2015 - 09/2013</td>
                <td>
                  <h3>{{ $t('resume.education.dut.title') }}</h3>
                  <p v-html="$t('resume.education.dut.description')" class="less-space-after"></p>
                  <div class="toggle-details"><a>+ details</a></div>
                  <div class="details">
                    <ul>
                      <li>DUT-INFO-S1-ANG1 - Anglais et informatique</li>
                      <li>DUT-INFO-S1-EC1 - Expression - Communication - Fondamentaux de la communication</li>
                      <li>DUT-INFO-M1203 - ECO1 - Environnement economique</li>
                      <li>DUT-INFO-M1204 - ORGA1 - Fonctionnement des organisations</li>
                      <li>DUT-INFO-S1-AP1.1 - Introduction a l'algorithmique et a la programmation</li>
                      <li>DUT-INFO-S1-AP1.2 - Structures de donnees et algorithmes fondamentaux</li>
                      <li>DUT-INFO-S1-BD1 - Introduction aux bases de donnees</li>
                      <li>DUT-INFO-S1-SI1 : Introduction aux systèmes informatiques</li>
                      <li>DUT-INFO-S1-MD1 : Mathématiques discrètes</li>
                      <li>DUT-INFO-S1-PPP1 : PPP - Connaitre le monde professionnel</li>
                      <li>DUT-INFO-S1-PROJET1 : Projet tutoré - Découverte</li>
                    </ul>
                    <ul>
                      <li>DUT-INFO-S2-EC2 : Expression, communication, information et argumentation</li>
                      <li>DUT-INFO-S2-ECJ : Environnement comptable, financier, juridique et social</li>
                      <li>DUT-INFO-S2-AMN2 : Analyse et méthodes numériques</li>
                      <li>DUT-INFO-S2-BCOO2 : Bases de la conception orientée objet</li>
                      <li>DUT-INFO-S2-GPI2 : Gestion de projet informatique</li>
                      <li>DUT-INFO-S2-RES2 : Architecture des réseaux</li>
                      <li>DUT-INFO-S2-SI2 : Architecture et programmation des mecanismes de base d'un systeme informatique</li>
                    </ul>
                    <ul>
                      <li>DUT-INFO-S3-ANG3 : Collaborer en anglais</li>
                      <li>DUT-INFO-S3-DTIC3 : Droit des technologies de l'information et de la communication (TIC)</li>
                      <li>DUT-INFO-S3-EC3 : Expression communication - Communication professionelle</li>
                      <li>DUT-INFO-S3-AA3 : Algorithmique avancée</li>
                      <li>DUT-INFO-S3-ASE3-IE : Architectures embarquées</li>
                      <li>DUT-INFO-S3-GSI3 : Gestion des systèmes d'information</li>
                      <li>DUT-INFO-S3-MPA3 : Méthodologie de la production d'applications</li>
                      <li>DUT-INFO-S3-PROGWEB3 : Programmation Web coté serveur</li>
                      <li>DUT-INFO-S3-RES3 : Services réseaux</li>
                      <li>DUT-INFO-S3-SI3 : Principe des systèmes d'exploitation</li>
                      <li>DUT-INFO-S3-STAT3 : Probabilités et statistiques</li>
                      <li>DUT-INFO-S3-PROJET3 : Projet tutoré - Mise en situation professionnelle</li>
                    </ul>
                    <ul>
                      <li>DUT-INFO-S4-ANG4-IE : Travailler en anglais</li>
                      <li>DUT-INFO-S4-EC4-IE : Expression communication - Communiquer dans les entreprises</li>
                      <li>DUT-INFO-S4-ISE4-IE : Interfaces pour les systèmes embarqués</li>
                      <li>DUT-INFO-S4-ITS4-IE : Informatique pour le traitement du signal</li>
                      <li>DUT-INFO-S4-PNM4-IE : Programmation native pour la mobilité</li>
                      <li>DUT-INFO-S4-PP4-IE : Pilotes de périphériques</li>
                      <li>DUT-INFO-S4-ROC4-IE : Réseaux pour objets connectés</li>
                      <li>DUT-INFO-S4-SEE4-IE : Systèmes d'exploitation pour l'embarqué</li>
                      <li>DUT-INFO-S4-MTS4-IE : Mathématiques pour le traitement du signal</li>
                      <li>DUT-INFO-S4-PROJ4-IE : Projet tutoré</li>
                      <li>DUT-INFO-S4-STAGE-IE : Stage professionnel</li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>06/2013 - 09/2010</td>
                <td>
                  <h3>{{ $t('resume.education.lycee.title') }}</h3>
                  <p v-html="$t('resume.education.lycee.description')"></p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section>
        <h2>{{ $t('resume.additionalactivities.word') }}</h2>
        <div class="table-wrapper">
          <table class="alt">
            <tbody>
              <tr>
                <td>09/2017 - 06/2017</td>
                <td>
                  <h3>{{ $t('resume.additionalactivities.partnaire2017.title') }}</h3>
                  <span><i>Partnaire</i></span>
                  <p>{{ $t('resume.additionalactivities.partnaire2017.description') }}</p>
                </td>
              </tr>
              <tr>
                <td>08/2016 - 07/2016</td>
                <td>
                  <h3>{{ $t('resume.additionalactivities.japan.title') }}</h3>
                  <p>{{ $t('resume.additionalactivities.japan.description') }}</p>
                </td>
              </tr>
              <tr>
                <td>06/2016 - 07/2015</td>
                <td>
                  <h3>{{ $t('resume.additionalactivities.partnaire2015.title') }}</h3>
                  <span><i>Partnaire</i></span>
                  <p>{{ $t('resume.additionalactivities.partnaire2015.description') }}</p>
                </td>
              </tr>
              <tr>
                <td>08/2014 - 07/2014</td>
                <td>
                  <h3>{{ $t('resume.additionalactivities.envol.title') }}</h3>
                  <span><i>Envol</i></span>
                  <p>{{ $t('resume.additionalactivities.envol.description') }}</p>
                </td>
              </tr>
              <tr>
                <td>08/2013 - 07/2013</td>
                <td>
                  <h3>{{ $t('resume.additionalactivities.adecco.title') }}</h3>
                  <span><i>Partnaire</i></span>
                  <p>{{ $t('resume.additionalactivities.adecco.description') }}</p>
                </td>
              </tr>
              <tr>
                <td>08/2015 - 01/2013</td>
                <td>
                  <h3>{{ $t('resume.additionalactivities.AJA.title') }}</h3>
                  <span><i>Association des Jeunes d'Aubigny (AJA)</i></span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </article>
  </div>
</template>

<script>

export default {
  mounted() {
    let toggles = document.getElementsByClassName('toggle-details')
    Array.prototype.forEach.call(toggles, (element) => {
      element.onclick = () => {
        element.parentElement.getElementsByClassName('details').item(0).classList.toggle('show-details')
        element.firstElementChild.textContent.includes('+') ? element.firstElementChild.textContent = element.firstElementChild.textContent.replace('\+', '-') : element.firstElementChild.textContent = element.firstElementChild.textContent.replace('\-', '+')
      }
    })
  }
}

</script>

<style scoped>

.toggle-details {
  text-align: left;
  width: 100%;
  margin-bottom: 2em;
  cursor: pointer;
}

.toggle-details a {
  text-transform: uppercase;
}

.details {
  display: none;
}

.details.show-details {
  display: block;
}

.less-space-after {
  margin-bottom: 1em;
}

</style>
