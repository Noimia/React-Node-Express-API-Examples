
// API TO SEND TO DB
router.post('/tickets/new', async (req, res) => {
        const created = new Date().toISOString();
        const { submitName, submitEmail, subject, description, status = 'Open' } = req.body;
        try {
          const pool = await poolPromise;
          const result = await pool.request()
            .input("submitName", sql.VarChar(50), submitName)
            .input("submitEmail", sql.VarChar(300), submitEmail)
            .input("subject", sql.VarChar(sql.MAX), subject)
            .input("description", sql.VarChar(sql.MAX), description)
            .input("status", sql.VarChar(50), status)
            .input("created", sql.DateTime, created)
            .execute('[dbo].[NewTicket]');
          res.send(result.recordsets);
        } catch (err) {
          res.status(500).send(err.message);
        }
      });


/// REACT/ JS Fetch
const submitNewTicket = async () => {
        const ticketData = {
          submitName: "User Name",
          submitEmail: "user@example.com",
          subject: "New ticket subject",
          description: "Detailed description of the issue or request.",
          status: "Open",
        };

        try {
          const response = await fetch('/tickets/new', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(ticketData),
          });
          const result = await response.json();
          console.log('Ticket created successfully:', result);
        } catch (error) {
          console.error('Error creating ticket:', error);
        }
      };

      // Call this function when submitting the ticket form
      submitNewTicket();
