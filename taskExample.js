// API TO SEND TO DB

 router.post('/tasks/new', async (req, res) => {
        const created = new Date().toISOString();
        const { submitName, taskText, section, status } = req.body;
        try {
          const pool = await poolPromise;
          const result = await pool.request()
            .input("submitName", sql.VarChar(50), submitName)
            .input("taskText", sql.VarChar(sql.MAX), taskText)
            .input("section", sql.VarChar(50), section)
            .input("status", sql.VarChar(50), status)
            .input("created", sql.DateTime, created)
            .execute('[dbo].[NewTask]');
          res.send(result.recordsets);
        } catch (err) {
          res.status(500).send(err.message);
        }
      });

// React / JS Fetch Action

const submitNewTask = async () => {
        const taskData = {
          submitName: "User",
          taskText: "New task to be added",
          section: "inProgress",
          status: "Open",
        };

        try {
          const response = await fetch('/tasks/new', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(taskData),
          });
          const result = await response.json();
          console.log('Task created successfully:', result);
        } catch (error) {
          console.error('Error creating task:', error);
        }
      };

      // Call this function in the component where task creation happens, e.g., onSubmit
      submitNewTask();
