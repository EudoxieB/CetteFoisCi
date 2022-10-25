INSERT INTO cabinet (cname, streetname, city, zip_code, country) VALUES
    ('St Jean Dental Care', '8 Pope Hennessy Street', 'Port Louis', '99390', 'Maurice'),
    ('Cabinet Orthalis', '2 av Prés Pierre Angot', 'Pau', '64000', 'France');
INSERT INTO patient (surname, name, birth_date, next_appointment, created_at) VALUES
    ('Aline', 'MOURAD', '1990-02-14'::TIMESTAMP, NULL, NOW()),
    ('Stephan', 'DRÉAN-GUÉNAÏZIA', '2005-10-24'::TIMESTAMP, NULL, NOW()),
    ('Manon', 'PORTIGLIATTI', '1991-10-12'::TIMESTAMP, NULL, NOW()),
    ('Maëva', 'NGUYEN', '2017-08-04'::TIMESTAMP, NULL, NOW()),
    ('Michel', 'DRÜCKER', '1993-11-11'::TIMESTAMP, NULL, NOW()),
    ('Roberto', 'RASTAPOPOULOS', '1932-12-2'::TIMESTAMP, NULL, NOW());
INSERT INTO patient_cabinet (patient_id, cabinet_id) VALUES 
    (1, 1),
    (2, 1),
    (2, 2),
    (4, 1);

INSERT INTO practicien (surname, name, cabinet_id) VALUES
    ('Eudoxie', 'Balole', 1),
    ('Kate', 'Katty', 2);

INSERT INTO users (username, password) VALUES 
    ('Eudoxie', 'Balole');