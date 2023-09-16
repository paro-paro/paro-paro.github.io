<template>
  <section id="Skills" :class="'section'">
    <div :class="'container'">
      <div :class="'row'">
        <div :class="'col-12'" style="padding-bottom: 1rem; font-size: 20px">
          <h1 style="margin: 0">Skills</h1>
        </div>

        <div :class="'col-12 col-md-6 col-lg-4'">
          <img :src="require('@/assets/icon/python.png')" :height="45" />
          <h3>Python</h3>
          <p>Flask, Django, SQLAlchemy, pandas, numpy, openpyxl</p>
        </div>

        <div :class="'col-12 col-md-6 col-lg-4'">
          <img :src="require('@/assets/icon/vuejs.png')" :height="45" />
          <h3>Frontend</h3>
          <p>HTML, CSS, SCSS, JavaScript, Vue.js, Nuxt</p>
        </div>

        <div :class="'col-12 col-md-6 col-lg-4'">
          <img :src="require('@/assets/icon/aws.png')" :height="45" />
          <h3>Cloud engineering</h3>
          <p>AWS EC2, AWS Lambda, AWS SQS, Elastic Beanstalk, S3, CloudFormation, CloudWatch</p>
        </div>

        <div :class="'col-12 col-md-6 col-lg-4'">
          <img :src="require('@/assets/icon/nodejs.png')" :height="45" />
          <h3>Node.js</h3>
          <p>Express</p>
        </div>

        <div :class="'col-12 col-md-6 col-lg-4'">
          <img :src="require('@/assets/icon/database.png')" :height="45" />
          <h3>Databases</h3>
          <p>MySQL, SQLite, AWS DynamoDB, MongoDB</p>
        </div>

        <div :class="'col-12 col-md-6 col-lg-4'">
          <img :src="require('@/assets/icon/gitlab.png')" :height="45" />
          <h3>DevOps</h3>
          <p>Gitlab CI/CD</p>
        </div>

        <div :class="'col-12 col-md-6 col-lg-4'">
          <img :src="require('@/assets/icon/git.png')" :height="45" />
          <h3>Tech Tools</h3>
          <p>git, serverless framework, jupyter notebook, unit testing</p>
        </div>

        <div :class="'col-12 col-md-6 col-lg-4'">
          <img :src="require('@/assets/icon/scrum.png')" :height="45" />
          <h3>Tools</h3>
          <p>Slack, Asana, Nuclino, Excel, SCRUM...</p>
        </div>

        <div :class="'col-12 col-md-6 col-lg-4'">
          <img :src="require('@/assets/icon/learn.png')" :height="45" />
          <h3>Mindset</h3>
          <p>keep on learning</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skills'
}
</script>

<style scoped>
.section {
  padding: 4rem 2rem 115px 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eaf2fa;
}

.row {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
}

.col-12 {
  flex: 0 0 100%;
  max-width: 100%;
}

@media only screen and (min-width: 576px) {
  .col-md-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
}

@media only screen and (min-width: 768px) {
  .col-lg-4 {
    flex: 0 0 33.33333333%;
    max-width: 33.33333333%;
  }
}

img {
  padding-bottom: 0.5rem;
}

h3 {
  margin-top: 0;
  margin-bottom: 5px;
  font-weight: 400;
  color: #333;
  font-family: montserrat, sans-serif;
  font-style: italic;
  font-weight: 600;
}

p {
  font-size: 14px;
  margin: 0;
  padding: 0;
  font-weight: 400;
}
</style>
