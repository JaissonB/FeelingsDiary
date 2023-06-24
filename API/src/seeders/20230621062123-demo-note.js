'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Notes', [
      {
        patient_id: 1,
        date: "2023-06-21 00:00:00+00:00",
        description: "My day was so good, because I love to sleep, and today I selpt twelve hours current. I am a happy person, I like cats and dogs, my life is amazing, it is it, love, cool, great job, brother, kill myself, hate killers, medicine, clu.  What a fucking baday.",
        title: "Good Feelings",
        positive: 8,
        negative: 2,
        neutral: 0,
        sentiment: "positive",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patient_id: 1,
        date: "2023-07-21 00:00:00+00:00",
        description: "My day was so good, because I love to sleep, and today I selpt twelve hours current. I am a happy person, I like cats and dogs, my life is amazing. What a fucking bad day bro.",
        title: "Amazing Feelings",
        positive: 10,
        negative: 0,
        neutral: 0,
        sentiment: "positive",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Notes', null, {});
  }
};
