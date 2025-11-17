import { Form, Input, Button } from 'rsuite';

function Inputs() {
    const handleSubmit = () => {
        alert("Form başarıyla gönderildi.");
    };

    return (
        <div style={{ maxWidth: 100000, margin: "30px auto" }}>
            <Form fluid onSubmit={handleSubmit}>

                <Form.Group>
                    <Form.ControlLabel>Ad Soyad</Form.ControlLabel>
                    <Form.Control
                        name="fullname"
                        accepter={Input}
                        placeholder="Adınızı şu formatta giriniz: Bilge CAN"
                    />
                </Form.Group>

                <Form.Group>
                    <Form.ControlLabel>Email</Form.ControlLabel>
                    <Form.Control
                        name="email"
                        accepter={Input}
                        type="email"
                        placeholder="ornek@gmail.com"
                    />
                </Form.Group>

                <Form.Group>
                    <Form.ControlLabel>Mesaj</Form.ControlLabel>
                    <Form.Control
                        name="message"
                        accepter={Input}
                        rows={15}
                        placeholder="Mesajınızı buraya yazabilirsiniz..."
                    />
                </Form.Group>

                <Button appearance="primary" type="submit" block>
                    Gönder
                </Button>
            </Form>
        </div>
    );
}

export default Inputs;
