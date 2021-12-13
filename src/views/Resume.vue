<template>
  <v-layout row justify-center align-center wrap class="mt-4 pt-2">
    <v-flex xs12 sm12 md12 lg12 xl12>
      <h2 class="pl-4">
        <span>My</span>
        <span class="blue--text">Resume</span>
      </h2>
    </v-flex>
    <v-flex xs12 sm12 md5 lg6 xl6 class="mt-4 pt-4">
      <h2 class="mb-4 pl-4 pt-2">Education</h2>
      <v-card-text class="py-0">
        <v-timeline align-top dense>
          <v-timeline-item color="blue" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold blue--text">
                  OCTOBER 2019-
                </div>
                <div class="caption font-weight-bold blue--text">
                  OCTOBER 2021
                </div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Engineer in Information System</strong>
                <div class="caption mb-2">
                  Institut de Mathématiques et de Science Physique (IMSP) de
                  Dangbo
                </div>
              </v-flex>
            </v-layout>
          </v-timeline-item>
          <v-timeline-item color="blue" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold blue--text">
                  OCTOBER 2015-
                </div>
                <div class="caption font-weight-bold blue--text">
                  OCTOBER 2018
                </div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Bachelor in Electric and Industrial Informatic </strong>
                <div class="caption mb-2">
                  Institut Universitaire de Technoloigie (IUT) de Lokossa
                </div>
              </v-flex>
            </v-layout>
          </v-timeline-item>
          <v-timeline-item color="blue" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold blue--text">
                  AUGUST 2017-
                </div>
                <div class="caption font-weight-bold blue--text">
                  SEPTEMBER 2017
                </div>
              </v-flex>
              <v-flex class="pl-2">
                <strong
                  >Industrial Informatic and Automatic System Conception
                  Attestation
                </strong>
                <div class="caption mb-2">ONG ADESTI de Cotonou</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>
          <v-timeline-item color="blue" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold blue--text">
                  AUGUST 2016-
                </div>
                <div class="caption font-weight-bold blue--text">
                  SEPTEMBER 2016
                </div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Industrial Electricity Attestation </strong>
                <div class="caption mb-2">
                  Centre de Perfectionnement du Personnel des Entreprises (CPPE)
                  de Cotonou
                </div>
              </v-flex>
            </v-layout>
          </v-timeline-item>
          <v-timeline-item color="blue" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold blue--text">
                  OCTOBER 2006 -
                </div>
                <div class="caption font-weight-bold blue--text">
                  OCTOBER 2015
                </div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Secondary Scientific Attestion</strong>
                <div class="caption mb-2">
                  Cours de Soutiens Scolaire (CSS) de Cotonou
                </div>
              </v-flex>
            </v-layout>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-flex>
    <v-flex xs12 sm12 md4 lg6 xl6 class="mt-4 pt-2">
      <h2 class="mb-4 pl-4">Experience</h2>
      <v-card-text class="py-0">
        <v-timeline align-top dense>
          <v-timeline-item color="blue" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold blue--text">
                  AUGUST 2021-
                </div>
                <div class="caption font-weight-bold blue--text">
                  OCTOBER 2021
                </div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Web Developer Internship</strong>
                <div class="caption mb-2">C2I-Startup</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>
          <v-timeline-item color="blue" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold blue--text">
                  AUGUST 2020-
                </div>
                <div class="caption font-weight-bold blue--text">
                  OCTOBER 2020
                </div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Web Developer</strong>
                <div class="caption mb-2">C2I-Startup</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>
          <v-timeline-item color="blue" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold blue--text">
                  APRIL 2018-
                </div>
                <div class="caption font-weight-bold blue--text">JULY 2016</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Academic Internship</strong>
                <div class="caption mb-2">
                  Inteligence Marchine For You ( MIFY )
                </div>
              </v-flex>
            </v-layout>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-flex>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-flex xs12 sm12 md4 lg5 xl5 class="mx-2 pt-4">
        <h2>
          <span>Coding </span>
          <span class="blue--text">Skills</span>
        </h2>
        <br />
        <strong>HTML/CSS/PHP/Javascript</strong>
        <v-progress-linear
          v-model="buffer4"
          :buffer-value="bufferValue"
          color="blue"
          height="16"
        ></v-progress-linear>
        <strong>C#</strong>
        <v-progress-linear
          v-model="buffer4"
          :buffer-value="bufferValue"
          color="blue"
          height="16"
        ></v-progress-linear>
        <strong>Java</strong>
        <v-progress-linear
          v-model="buffer4"
          :buffer-value="bufferValue"
          color="blue"
          height="16"
        ></v-progress-linear>
        <strong>Python</strong>
        <v-progress-linear
          v-model="buffer3"
          :buffer-value="bufferValue"
          color="blue"
          height="16"
        ></v-progress-linear>
        <strong>Android</strong>
        <v-progress-linear
          v-model="buffer3"
          :buffer-value="bufferValue"
          color="blue"
          height="16"
        ></v-progress-linear>
      </v-flex>

      <v-flex xs12 sm12 md4 lg5 xl5 class="mx-2 pt-4">
        <h2>
          <span>Framework </span>
          <span class="blue--text">Skills</span>
        </h2>
        <br />
        <strong>Laravel</strong>
        <v-progress-linear
          v-model="buffer5"
          :buffer-value="bufferValue"
          color="blue"
          height="16"
        ></v-progress-linear>
        <strong>Django</strong>
        <v-progress-linear
          v-model="buffer4"
          :buffer-value="bufferValue"
          color="blue"
          height="16"
        ></v-progress-linear>
        <strong>VueJs</strong>
        <v-progress-linear
          v-model="buffer2"
          :buffer-value="bufferValue"
          color="blue"
          height="16"
        ></v-progress-linear>
        <strong>AngularJs</strong>
        <v-progress-linear
          v-model="buffer2"
          :buffer-value="bufferValue"
          color="blue"
          height="16"
        ></v-progress-linear>
      </v-flex>
      <v-flex xs12 sm12 md4 lg5 xl5 class="mx-2 pt-4">
        <h2>
          <span>Personal </span>
          <span class="blue--text">Skills</span>
        </h2>
        <br />
        <strong>Embeded System ( Arduino )</strong>
        <v-progress-linear
          v-model="buffer4"
          :buffer-value="bufferValue"
          color="blue"
          height="16"
        ></v-progress-linear>
        <strong> Machine Learning and Artificial Inteligence</strong>
        <v-progress-linear
          v-model="buffer3"
          :buffer-value="bufferValue"
          color="blue"
          height="16"
        ></v-progress-linear>
        <strong
          >Database and Big Data (MySql, Postgresql, MongoDb, Neo4j )</strong
        >
        <v-progress-linear
          v-model="buffer3"
          :buffer-value="bufferValue"
          color="blue"
          height="16"
        ></v-progress-linear>
      </v-flex>

      <v-flex xs12 sm12 md4 lg5 xl5 class="mx-2 pt-4">
        <h2>
          <span class="gray--text">Language </span>
          <span class="blue--text">Skills</span>
        </h2>
        <br />
        <strong>French</strong>
        <v-progress-linear
          v-model="buffer5"
          :buffer-value="bufferValue"
          color="blue"
          height="16"
        ></v-progress-linear>
        <strong>English</strong>
        <v-progress-linear
          v-model="buffer4"
          :buffer-value="bufferValue"
          color="blue"
          height="16"
        ></v-progress-linear>
      </v-flex>

      <div class="mt-4 pt-2">
        <v-btn
          href="https://docs.google.com/document/d/1WSR42FEgUahJuR_RArW1wz7TfUBlgj13zekRidmQgs4/edit?usp=sharing"
          target="_blank"
          color="blue"
          dark
          large
        >
          Download Resume
          <v-icon right dark>fas fa-file-download</v-icon>
        </v-btn>
      </div>
    </v-layout>
  </v-layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Resume",
    titleTemplate: "%s ← Parfait's Space",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Vue NUXT HTML CSS JavaScript Design Adobe XD Photoshop Coding Skills Resume Work Web Developer Front-End",
      },
      { charset: "utf-8" },
      { property: "og:title", content: "Parfait' Space" },
      { property: "og:site_name", content: "Parfait' Space" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://Parfait.space" },
      {
        property: "og:image",
        content: "../assets/profile.jpg",
      },
      {
        property: "og:description",
        content:
          "Vue NUXT HTML CSS JavaScript Design Adobe XD Photoshop Coding Skills Resume Work Web Developer Front-End",
      },
    ],
  },
  data() {
    return {
      value: 0,
      buffer1: 0,
      buffer2: 0,
      buffer3: 0,
      buffer4: 0,
      buffer5: 0,
      buffer6: 0,
      bufferValue: 100,
      interval: 0,
    };
  },
  mounted() {
    this.startBuffer();
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },

  methods: {
    startBuffer() {
      this.interval = setInterval(() => {
        this.buffer5 = 90;
        this.buffer4 = 85;
        this.buffer3 = 80;
        this.buffer2 = 75;
        this.buffer1 = 70;
      }, 800);
    },
  },
};
</script>
<style></style>
