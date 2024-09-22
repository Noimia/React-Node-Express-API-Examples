// API TO SEND TO DB

 router.post('/facilitators/new', async (req, res) => {
        const { name, skills, onboarding } = req.body;
        try {
          const pool = await poolPromise;
          const result = await pool.request()
            .input("name", sql.VarChar(100), name)
            .input("skills", sql.VarChar(sql.MAX), JSON.stringify(skills))
            .input("onboarding", sql.Bit, onboarding)
            .execute('[dbo].[NewFacilitator]');
          res.send(result.recordsets);
        } catch (err) {
          res.status(500).send(err.message);
        }
      });

// React / JS Fetch Action


const submitNewFacilitator = async () => {
        const facilitatorData = {
          name: "New Facilitator",
          skills: Array(10).fill(false),  // Placeholder for skills
          onboarding: false,
        };

        try {
          const response = await fetch('/facilitators/new', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(facilitatorData),
          });
          const result = await response.json();
          console.log('Facilitator created successfully:', result);
        } catch (error) {
          console.error('Error creating facilitator:', error);
        }
      };

      // Call this function when submitting the facilitator form
      submitNewFacilitator();
