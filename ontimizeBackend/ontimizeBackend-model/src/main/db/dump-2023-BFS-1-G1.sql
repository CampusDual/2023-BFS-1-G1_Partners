--
-- PostgreSQL database dump
--

-- Dumped from database version 11.16 (Debian 11.16-0+deb10u1)
-- Dumped by pg_dump version 14.2

-- Started on 2023-07-27 12:54:46

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE "2023-BFS-1-G1";
--
-- TOC entry 3135 (class 1262 OID 206191)
-- Name: 2023-BFS-1-G1; Type: DATABASE; Schema: -; Owner: -
--

CREATE DATABASE "2023-BFS-1-G1" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';


\connect -reuse-previous=on "dbname='2023-BFS-1-G1'"

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- TOC entry 3136 (class 0 OID 0)
-- Dependencies: 3
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

--
-- TOC entry 232 (class 1259 OID 261039)
-- Name: countries; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.countries (
    id integer NOT NULL,
    country character varying(255)
);


--
-- TOC entry 231 (class 1259 OID 261037)
-- Name: countries_id_country_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.countries_id_country_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3137 (class 0 OID 0)
-- Dependencies: 231
-- Name: countries_id_country_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.countries_id_country_seq OWNED BY public.countries.id;


--
-- TOC entry 228 (class 1259 OID 253332)
-- Name: document_files; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.document_files (
    id integer NOT NULL,
    name character varying(100),
    document_type character varying(20),
    user_id character varying,
    personal_document_id integer,
    file_path character varying,
    description character varying
);


--
-- TOC entry 227 (class 1259 OID 253330)
-- Name: document_files_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.document_files_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3138 (class 0 OID 0)
-- Dependencies: 227
-- Name: document_files_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.document_files_id_seq OWNED BY public.document_files.id;


--
-- TOC entry 234 (class 1259 OID 261069)
-- Name: languages; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.languages (
    id integer NOT NULL,
    language character varying(255)
);


--
-- TOC entry 233 (class 1259 OID 261067)
-- Name: languages_id_language_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.languages_id_language_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3139 (class 0 OID 0)
-- Dependencies: 233
-- Name: languages_id_language_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.languages_id_language_seq OWNED BY public.languages.id;


--
-- TOC entry 226 (class 1259 OID 244793)
-- Name: personal_documents; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.personal_documents (
    id integer NOT NULL,
    name character varying(255)
);


--
-- TOC entry 225 (class 1259 OID 244791)
-- Name: personal_documents_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.personal_documents_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3140 (class 0 OID 0)
-- Dependencies: 225
-- Name: personal_documents_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.personal_documents_id_seq OWNED BY public.personal_documents.id;


--
-- TOC entry 220 (class 1259 OID 215753)
-- Name: product_user; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.product_user (
    user_id character varying(50) NOT NULL,
    product_id integer NOT NULL
);


--
-- TOC entry 224 (class 1259 OID 242500)
-- Name: productfiles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.productfiles (
    id integer NOT NULL,
    product_id integer NOT NULL,
    name character varying(255) NOT NULL,
    file_path character varying(255) NOT NULL
);


--
-- TOC entry 223 (class 1259 OID 242498)
-- Name: productfiles_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.productfiles ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.productfiles_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 219 (class 1259 OID 215733)
-- Name: products; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products (
    id integer NOT NULL,
    name character varying(255)
);


--
-- TOC entry 218 (class 1259 OID 215731)
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.products ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.products_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 222 (class 1259 OID 224128)
-- Name: resources; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.resources (
    id integer NOT NULL,
    product_id integer,
    resource_name character varying(100),
    resource_type character varying(20)
);


--
-- TOC entry 221 (class 1259 OID 224126)
-- Name: resources_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.resources_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3141 (class 0 OID 0)
-- Dependencies: 221
-- Name: resources_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.resources_id_seq OWNED BY public.resources.id;


--
-- TOC entry 199 (class 1259 OID 215519)
-- Name: ti18n; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.ti18n (
    id_i18n integer NOT NULL,
    class_name character varying(150),
    i18n_description character varying(250)
);


--
-- TOC entry 198 (class 1259 OID 215517)
-- Name: ti18n_id_i18n_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.ti18n ALTER COLUMN id_i18n ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.ti18n_id_i18n_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 201 (class 1259 OID 215527)
-- Name: ti18n_value; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.ti18n_value (
    id_i18n_value integer NOT NULL,
    id_i18n integer NOT NULL,
    "KEY" character varying(250),
    es_es character varying(10485760),
    en_us character varying(10485760),
    gl_es character varying(10485760)
);


--
-- TOC entry 200 (class 1259 OID 215525)
-- Name: ti18n_value_id_i18n_value_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.ti18n_value ALTER COLUMN id_i18n_value ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.ti18n_value_id_i18n_value_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 202 (class 1259 OID 215536)
-- Name: trequest_statistics; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.trequest_statistics (
    id_request_statistics integer NOT NULL,
    service_name character varying(255),
    method_name character varying(50),
    user_name character varying(50),
    execution_date date,
    execution_time integer,
    method_params character varying(5000),
    service_exception character varying(5000)
);


--
-- TOC entry 204 (class 1259 OID 215547)
-- Name: trole; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.trole (
    id_rolename integer NOT NULL,
    rolename character varying(255),
    xmlclientpermission character varying(10485760)
);


--
-- TOC entry 203 (class 1259 OID 215545)
-- Name: trole_id_rolename_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.trole ALTER COLUMN id_rolename ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.trole_id_rolename_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 215 (class 1259 OID 215612)
-- Name: trole_server_permission; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.trole_server_permission (
    id_role_server_permission integer NOT NULL,
    id_rolename integer,
    id_server_permission integer
);


--
-- TOC entry 214 (class 1259 OID 215610)
-- Name: trole_server_permission_id_role_server_permission_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.trole_server_permission ALTER COLUMN id_role_server_permission ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.trole_server_permission_id_role_server_permission_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 206 (class 1259 OID 215558)
-- Name: tserver_permission; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tserver_permission (
    id_server_permission integer NOT NULL,
    permission_name character varying(10485760)
);


--
-- TOC entry 205 (class 1259 OID 215556)
-- Name: tserver_permission_id_server_permission_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.tserver_permission ALTER COLUMN id_server_permission ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.tserver_permission_id_server_permission_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 208 (class 1259 OID 215569)
-- Name: tsetting; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tsetting (
    id_setting integer NOT NULL,
    setting_key character varying(10485760),
    setting_value character varying(10485760),
    setting_comment character varying(10485760)
);


--
-- TOC entry 207 (class 1259 OID 215567)
-- Name: tsetting_id_setting_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.tsetting ALTER COLUMN id_setting ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.tsetting_id_setting_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 209 (class 1259 OID 215578)
-- Name: tuser; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tuser (
    user_ character varying(50) NOT NULL,
    password character varying(255),
    name character varying(50),
    surname character varying(50),
    email character varying(50),
    userblocked timestamp without time zone,
    lastpasswordupdate timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    firstlogin boolean DEFAULT true,
    id_country integer,
    id_language integer,
    company character varying
);


--
-- TOC entry 211 (class 1259 OID 215593)
-- Name: tuser_preference; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tuser_preference (
    id_user_preference integer NOT NULL,
    preference_name character varying(150),
    user_login character varying(150),
    preference_value character varying(10485760)
);


--
-- TOC entry 210 (class 1259 OID 215591)
-- Name: tuser_preference_id_user_preference_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.tuser_preference ALTER COLUMN id_user_preference ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.tuser_preference_id_user_preference_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 217 (class 1259 OID 215632)
-- Name: tuser_role; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tuser_role (
    id_user_role integer NOT NULL,
    id_rolename integer,
    user_ character varying(50)
);


--
-- TOC entry 216 (class 1259 OID 215630)
-- Name: tuser_role_id_user_role_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.tuser_role ALTER COLUMN id_user_role ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.tuser_role_id_user_role_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 230 (class 1259 OID 261026)
-- Name: user_countries; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.user_countries (
    id_user_country integer NOT NULL,
    id_country integer,
    user_ character varying(255)
);


--
-- TOC entry 229 (class 1259 OID 261024)
-- Name: user_countries_id_user_country_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.user_countries_id_user_country_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3142 (class 0 OID 0)
-- Dependencies: 229
-- Name: user_countries_id_user_country_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.user_countries_id_user_country_seq OWNED BY public.user_countries.id_user_country;


--
-- TOC entry 213 (class 1259 OID 215604)
-- Name: user_roles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.user_roles (
    id integer NOT NULL,
    user_id integer NOT NULL,
    role_id integer NOT NULL
);


--
-- TOC entry 212 (class 1259 OID 215602)
-- Name: user_roles_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.user_roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3143 (class 0 OID 0)
-- Dependencies: 212
-- Name: user_roles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.user_roles_id_seq OWNED BY public.user_roles.id;


--
-- TOC entry 2903 (class 2604 OID 261042)
-- Name: countries id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.countries ALTER COLUMN id SET DEFAULT nextval('public.countries_id_country_seq'::regclass);


--
-- TOC entry 2901 (class 2604 OID 253335)
-- Name: document_files id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.document_files ALTER COLUMN id SET DEFAULT nextval('public.document_files_id_seq'::regclass);


--
-- TOC entry 2904 (class 2604 OID 261072)
-- Name: languages id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.languages ALTER COLUMN id SET DEFAULT nextval('public.languages_id_language_seq'::regclass);


--
-- TOC entry 2900 (class 2604 OID 244796)
-- Name: personal_documents id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.personal_documents ALTER COLUMN id SET DEFAULT nextval('public.personal_documents_id_seq'::regclass);


--
-- TOC entry 2899 (class 2604 OID 224131)
-- Name: resources id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.resources ALTER COLUMN id SET DEFAULT nextval('public.resources_id_seq'::regclass);


--
-- TOC entry 2902 (class 2604 OID 261029)
-- Name: user_countries id_user_country; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user_countries ALTER COLUMN id_user_country SET DEFAULT nextval('public.user_countries_id_user_country_seq'::regclass);


--
-- TOC entry 2898 (class 2604 OID 215607)
-- Name: user_roles id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user_roles ALTER COLUMN id SET DEFAULT nextval('public.user_roles_id_seq'::regclass);


--
-- TOC entry 3127 (class 0 OID 261039)
-- Dependencies: 232
-- Data for Name: countries; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.countries VALUES (1, 'Afghanistan');
INSERT INTO public.countries VALUES (4, 'Andorra');
INSERT INTO public.countries VALUES (5, 'Angola');
INSERT INTO public.countries VALUES (6, 'Antigua and Barbuda');
INSERT INTO public.countries VALUES (7, 'Argentina');
INSERT INTO public.countries VALUES (8, 'Armenia');
INSERT INTO public.countries VALUES (9, 'Australia');
INSERT INTO public.countries VALUES (10, 'Austria');
INSERT INTO public.countries VALUES (11, 'Azerbaijan');
INSERT INTO public.countries VALUES (12, 'Bahamas');
INSERT INTO public.countries VALUES (13, 'Bahrain');
INSERT INTO public.countries VALUES (14, 'Bangladesh');
INSERT INTO public.countries VALUES (15, 'Barbados');
INSERT INTO public.countries VALUES (16, 'Belarus');
INSERT INTO public.countries VALUES (17, 'Belgium');
INSERT INTO public.countries VALUES (18, 'Belize');
INSERT INTO public.countries VALUES (19, 'Benin');
INSERT INTO public.countries VALUES (20, 'Bhutan');
INSERT INTO public.countries VALUES (21, 'Bolivia');
INSERT INTO public.countries VALUES (22, 'Bosnia and Herzegovina');
INSERT INTO public.countries VALUES (23, 'Botswana');
INSERT INTO public.countries VALUES (24, 'Brazil');
INSERT INTO public.countries VALUES (25, 'Brunei');
INSERT INTO public.countries VALUES (26, 'Bulgaria');
INSERT INTO public.countries VALUES (27, 'Burkina Faso');
INSERT INTO public.countries VALUES (28, 'Burundi');
INSERT INTO public.countries VALUES (29, 'Cabo Verde');
INSERT INTO public.countries VALUES (30, 'Cambodia');
INSERT INTO public.countries VALUES (31, 'Cameroon');
INSERT INTO public.countries VALUES (32, 'Canada');
INSERT INTO public.countries VALUES (33, 'Central African Republic');
INSERT INTO public.countries VALUES (34, 'Chad');
INSERT INTO public.countries VALUES (35, 'Chile');
INSERT INTO public.countries VALUES (36, 'China');
INSERT INTO public.countries VALUES (37, 'Colombia');
INSERT INTO public.countries VALUES (38, 'Comoros');
INSERT INTO public.countries VALUES (39, 'Congo');
INSERT INTO public.countries VALUES (40, 'Costa Rica');
INSERT INTO public.countries VALUES (41, 'Croatia');
INSERT INTO public.countries VALUES (42, 'Cuba');
INSERT INTO public.countries VALUES (43, 'Cyprus');
INSERT INTO public.countries VALUES (44, 'Czech Republic');
INSERT INTO public.countries VALUES (45, 'Denmark');
INSERT INTO public.countries VALUES (46, 'Djibouti');
INSERT INTO public.countries VALUES (47, 'Dominica');
INSERT INTO public.countries VALUES (48, 'Dominican Republic');
INSERT INTO public.countries VALUES (49, 'East Timor');
INSERT INTO public.countries VALUES (50, 'Ecuador');
INSERT INTO public.countries VALUES (51, 'Egypt');
INSERT INTO public.countries VALUES (52, 'El Salvador');
INSERT INTO public.countries VALUES (53, 'Equatorial Guinea');
INSERT INTO public.countries VALUES (54, 'Eritrea');
INSERT INTO public.countries VALUES (55, 'Estonia');
INSERT INTO public.countries VALUES (56, 'Eswatini');
INSERT INTO public.countries VALUES (57, 'Ethiopia');
INSERT INTO public.countries VALUES (58, 'Fiji');
INSERT INTO public.countries VALUES (59, 'Finland');
INSERT INTO public.countries VALUES (60, 'France');
INSERT INTO public.countries VALUES (61, 'Gabon');
INSERT INTO public.countries VALUES (62, 'Gambia');
INSERT INTO public.countries VALUES (63, 'Georgia');
INSERT INTO public.countries VALUES (64, 'Germany');
INSERT INTO public.countries VALUES (65, 'Ghana');
INSERT INTO public.countries VALUES (66, 'Greece');
INSERT INTO public.countries VALUES (67, 'Grenada');
INSERT INTO public.countries VALUES (68, 'Guatemala');
INSERT INTO public.countries VALUES (69, 'Guinea');
INSERT INTO public.countries VALUES (70, 'Guinea-Bissau');
INSERT INTO public.countries VALUES (71, 'Guyana');
INSERT INTO public.countries VALUES (72, 'Haiti');
INSERT INTO public.countries VALUES (73, 'Honduras');
INSERT INTO public.countries VALUES (74, 'Hungary');
INSERT INTO public.countries VALUES (75, 'Iceland');
INSERT INTO public.countries VALUES (76, 'India');
INSERT INTO public.countries VALUES (77, 'Indonesia');
INSERT INTO public.countries VALUES (78, 'Iran');
INSERT INTO public.countries VALUES (79, 'Iraq');
INSERT INTO public.countries VALUES (80, 'Ireland');
INSERT INTO public.countries VALUES (81, 'Israel');
INSERT INTO public.countries VALUES (82, 'Italy');
INSERT INTO public.countries VALUES (83, 'Jamaica');
INSERT INTO public.countries VALUES (84, 'Japan');
INSERT INTO public.countries VALUES (85, 'Jordan');
INSERT INTO public.countries VALUES (86, 'Kazakhstan');
INSERT INTO public.countries VALUES (87, 'Kenya');
INSERT INTO public.countries VALUES (88, 'Kiribati');
INSERT INTO public.countries VALUES (89, 'Korea, North');
INSERT INTO public.countries VALUES (90, 'Korea, South');
INSERT INTO public.countries VALUES (91, 'Kuwait');
INSERT INTO public.countries VALUES (92, 'Kyrgyzstan');
INSERT INTO public.countries VALUES (93, 'Laos');
INSERT INTO public.countries VALUES (94, 'Latvia');
INSERT INTO public.countries VALUES (95, 'Lebanon');
INSERT INTO public.countries VALUES (96, 'Lesotho');
INSERT INTO public.countries VALUES (97, 'Liberia');
INSERT INTO public.countries VALUES (98, 'Libya');
INSERT INTO public.countries VALUES (99, 'Liechtenstein');
INSERT INTO public.countries VALUES (100, 'Lithuania');
INSERT INTO public.countries VALUES (101, 'Luxembourg');
INSERT INTO public.countries VALUES (102, 'Madagascar');
INSERT INTO public.countries VALUES (103, 'Malawi');
INSERT INTO public.countries VALUES (104, 'Malaysia');
INSERT INTO public.countries VALUES (105, 'Maldives');
INSERT INTO public.countries VALUES (106, 'Mali');
INSERT INTO public.countries VALUES (107, 'Malta');
INSERT INTO public.countries VALUES (108, 'Marshall Islands');
INSERT INTO public.countries VALUES (109, 'Mauritania');
INSERT INTO public.countries VALUES (110, 'Mauritius');
INSERT INTO public.countries VALUES (111, 'Mexico');
INSERT INTO public.countries VALUES (112, 'Micronesia');
INSERT INTO public.countries VALUES (113, 'Moldova');
INSERT INTO public.countries VALUES (114, 'Monaco');
INSERT INTO public.countries VALUES (115, 'Mongolia');
INSERT INTO public.countries VALUES (116, 'Montenegro');
INSERT INTO public.countries VALUES (117, 'Morocco');
INSERT INTO public.countries VALUES (118, 'Mozambique');
INSERT INTO public.countries VALUES (119, 'Myanmar');
INSERT INTO public.countries VALUES (120, 'Namibia');
INSERT INTO public.countries VALUES (121, 'Nauru');
INSERT INTO public.countries VALUES (122, 'Luxembourg');
INSERT INTO public.countries VALUES (123, 'Madagascar');
INSERT INTO public.countries VALUES (124, 'Malawi');
INSERT INTO public.countries VALUES (125, 'Malaysia');
INSERT INTO public.countries VALUES (126, 'Maldives');
INSERT INTO public.countries VALUES (127, 'Mali');
INSERT INTO public.countries VALUES (128, 'Malta');
INSERT INTO public.countries VALUES (129, 'Marshall Islands');
INSERT INTO public.countries VALUES (130, 'Mauritania');
INSERT INTO public.countries VALUES (131, 'Mauritius');
INSERT INTO public.countries VALUES (132, 'Mexico');
INSERT INTO public.countries VALUES (133, 'Micronesia');
INSERT INTO public.countries VALUES (134, 'Moldova');
INSERT INTO public.countries VALUES (135, 'Monaco');
INSERT INTO public.countries VALUES (136, 'Mongolia');
INSERT INTO public.countries VALUES (137, 'Montenegro');
INSERT INTO public.countries VALUES (138, 'Morocco');
INSERT INTO public.countries VALUES (139, 'Mozambique');
INSERT INTO public.countries VALUES (140, 'Myanmar');
INSERT INTO public.countries VALUES (141, 'Namibia');
INSERT INTO public.countries VALUES (142, 'Nauru');
INSERT INTO public.countries VALUES (143, 'Nepal');
INSERT INTO public.countries VALUES (144, 'Netherlands');
INSERT INTO public.countries VALUES (145, 'New Zealand');
INSERT INTO public.countries VALUES (146, 'Nicaragua');
INSERT INTO public.countries VALUES (147, 'Niger');
INSERT INTO public.countries VALUES (148, 'Nigeria');
INSERT INTO public.countries VALUES (149, 'North Macedonia');
INSERT INTO public.countries VALUES (150, 'Norway');
INSERT INTO public.countries VALUES (151, 'Oman');
INSERT INTO public.countries VALUES (152, 'Pakistan');
INSERT INTO public.countries VALUES (153, 'Palau');
INSERT INTO public.countries VALUES (154, 'Panama');
INSERT INTO public.countries VALUES (155, 'Papua New Guinea');
INSERT INTO public.countries VALUES (156, 'Paraguay');
INSERT INTO public.countries VALUES (157, 'Peru');
INSERT INTO public.countries VALUES (158, 'Philippines');
INSERT INTO public.countries VALUES (159, 'Poland');
INSERT INTO public.countries VALUES (160, 'Portugal');
INSERT INTO public.countries VALUES (161, 'Qatar');
INSERT INTO public.countries VALUES (162, 'Romania');
INSERT INTO public.countries VALUES (163, 'Russia');
INSERT INTO public.countries VALUES (164, 'Rwanda');
INSERT INTO public.countries VALUES (165, 'Saint Kitts and Nevis');
INSERT INTO public.countries VALUES (166, 'Saint Lucia');
INSERT INTO public.countries VALUES (167, 'Saint Vincent and the Grenadines');
INSERT INTO public.countries VALUES (168, 'Samoa');
INSERT INTO public.countries VALUES (169, 'San Marino');
INSERT INTO public.countries VALUES (170, 'Sao Tome and Principe');
INSERT INTO public.countries VALUES (171, 'Saudi Arabia');
INSERT INTO public.countries VALUES (172, 'Senegal');
INSERT INTO public.countries VALUES (173, 'Serbia');
INSERT INTO public.countries VALUES (174, 'Seychelles');
INSERT INTO public.countries VALUES (175, 'Sierra Leone');
INSERT INTO public.countries VALUES (176, 'Singapore');
INSERT INTO public.countries VALUES (177, 'Slovakia');
INSERT INTO public.countries VALUES (178, 'Slovenia');
INSERT INTO public.countries VALUES (179, 'Solomon Islands');
INSERT INTO public.countries VALUES (180, 'Somalia');
INSERT INTO public.countries VALUES (3, 'Algerian');
INSERT INTO public.countries VALUES (181, 'South Africa');
INSERT INTO public.countries VALUES (182, 'South Sudan');
INSERT INTO public.countries VALUES (183, 'Spain');
INSERT INTO public.countries VALUES (184, 'Sri Lanka');
INSERT INTO public.countries VALUES (185, 'Sudan');
INSERT INTO public.countries VALUES (186, 'Suriname');
INSERT INTO public.countries VALUES (187, 'Sweden');
INSERT INTO public.countries VALUES (188, 'Switzerland');
INSERT INTO public.countries VALUES (189, 'Syria');
INSERT INTO public.countries VALUES (190, 'Taiwan');
INSERT INTO public.countries VALUES (191, 'Tajikistan');
INSERT INTO public.countries VALUES (192, 'Tanzania');
INSERT INTO public.countries VALUES (193, 'Thailand');
INSERT INTO public.countries VALUES (194, 'Togo');
INSERT INTO public.countries VALUES (195, 'Tonga');
INSERT INTO public.countries VALUES (196, 'Trinidad and Tobago');
INSERT INTO public.countries VALUES (197, 'Tunisia');
INSERT INTO public.countries VALUES (198, 'Turkey');
INSERT INTO public.countries VALUES (199, 'Turkmenistan');
INSERT INTO public.countries VALUES (200, 'Tuvalu');
INSERT INTO public.countries VALUES (201, 'Uganda');
INSERT INTO public.countries VALUES (202, 'Ukraine');
INSERT INTO public.countries VALUES (203, 'United Arab Emirates');
INSERT INTO public.countries VALUES (204, 'United Kingdom');
INSERT INTO public.countries VALUES (205, 'United States');
INSERT INTO public.countries VALUES (206, 'Uruguay');
INSERT INTO public.countries VALUES (207, 'Uzbekistan');
INSERT INTO public.countries VALUES (208, 'Vanuatu');
INSERT INTO public.countries VALUES (209, 'Vatican City');
INSERT INTO public.countries VALUES (210, 'Venezuela');
INSERT INTO public.countries VALUES (211, 'Vietnam');
INSERT INTO public.countries VALUES (212, 'Yemen');
INSERT INTO public.countries VALUES (213, 'Zambia');
INSERT INTO public.countries VALUES (214, 'Zimbabwe');
INSERT INTO public.countries VALUES (2, 'Albany');


--
-- TOC entry 3123 (class 0 OID 253332)
-- Dependencies: 228
-- Data for Name: document_files; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.document_files VALUES (43, 'contratoPrueba.txt', NULL, 'partner', NULL, 'C:\partners\ImatiaPartners\partner\contratoPrueba.txt', 'aaa');
INSERT INTO public.document_files VALUES (44, 'firufiru.txt', NULL, 'partner', NULL, 'C:\partners\ImatiaPartners\partner\firufiru.txt', 'bbbb');
INSERT INTO public.document_files VALUES (46, 'contratoPrueba.txt', NULL, 'savarela@partnerimatia.com', NULL, 'C:\partners\ImatiaPartners\savarela@partnerimatia.com\contratoPrueba.txt', NULL);
INSERT INTO public.document_files VALUES (49, 'Lucia_Viqueira_Curriculum.pdf', NULL, 'luciaviqueira@partnersimatia.com', NULL, 'C:\partners\ImatiaPartners\luciaviqueira@partnersimatia.com\Lucia_Viqueira_Curriculum.pdf', NULL);
INSERT INTO public.document_files VALUES (26, 'algo.txt', NULL, 'angarcia@partnersimatia.com', NULL, 'C:\partners\ImatiaPartners\angarcia@partnersimatia.com\algo.txt', 'cosas varias');
INSERT INTO public.document_files VALUES (50, 'contratoImatia.txt', NULL, 'luciaviqueira@partnersimatia.com', NULL, 'C:\partners\ImatiaPartners\luciaviqueira@partnersimatia.com\contratoImatia.txt', NULL);
INSERT INTO public.document_files VALUES (51, 'NDA_Lucia.pdf', NULL, 'luciaviqueira@partnersimatia.com', NULL, 'C:\partners\ImatiaPartners\luciaviqueira@partnersimatia.com\NDA_Lucia.pdf', NULL);
INSERT INTO public.document_files VALUES (13, 'NDA_Imatia_Juanjo_Alvarez_2022.txt', NULL, NULL, NULL, 'C:\partners\ImatiaPartners\null\NDA_Imatia_Juanjo_Alvarez_2022.txt', 'Contrato de confidencialidad');
INSERT INTO public.document_files VALUES (14, 'contratoPrueba.txt', NULL, NULL, NULL, 'C:\partners\ImatiaPartners\null\contratoPrueba.txt', 'Contrato');
INSERT INTO public.document_files VALUES (15, 'contratoPrueba.txt', NULL, 'juanperez@partnersimatia.com', NULL, 'C:\partners\ImatiaPartners\juanperez@partnersimatia.com\contratoPrueba.txt', 'Contrato');
INSERT INTO public.document_files VALUES (16, 'NDA_Imatia_Juanjo_Alvarez_2022.txt', NULL, 'juanperez@partnersimatia.com', NULL, 'C:\partners\ImatiaPartners\juanperez@partnersimatia.com\NDA_Imatia_Juanjo_Alvarez_2022.txt', 'Contrato de confidencialidad');
INSERT INTO public.document_files VALUES (17, 'NDA_Daniel_Martinez_2022.txt', NULL, 'juanperez@partnersimatia.com', NULL, 'C:\partners\ImatiaPartners\juanperez@partnersimatia.com\NDA_Daniel_Martinez_2022.txt', 'Contrato de confidencialidad');
INSERT INTO public.document_files VALUES (18, 'NDA_Imatia_Juanjo_Alvarez_2022.txt', NULL, 'partner', NULL, 'C:\partners\ImatiaPartners\partner\NDA_Imatia_Juanjo_Alvarez_2022.txt', 'Contrato de confidencialidad');
INSERT INTO public.document_files VALUES (19, 'NDA_Daniel_Martinez_2022.txt', NULL, 'damartinez@imatia.es', NULL, 'C:\partners\ImatiaPartners\damartinez@imatia.es\NDA_Daniel_Martinez_2022.txt', 'Contrato de confidencialidad');
INSERT INTO public.document_files VALUES (20, 'contratoPrueba.txt', NULL, 'damartinez@imatia.es', NULL, 'C:\partners\ImatiaPartners\damartinez@imatia.es\contratoPrueba.txt', 'Contrato');
INSERT INTO public.document_files VALUES (21, 'hola.txt', NULL, 'damartinez@imatia.es', NULL, 'C:\partners\ImatiaPartners\damartinez@imatia.es\hola.txt', 'Contrato');
INSERT INTO public.document_files VALUES (52, 'Acuerdo_de_marketing.txt', NULL, 'iria.sanchezmedin@gmail.com', NULL, 'C:\partners\ImatiaPartners\iria.sanchezmedin@gmail.com\Acuerdo_de_marketing.txt', NULL);
INSERT INTO public.document_files VALUES (53, 'Contrato_Adrian.txt', NULL, 'angarcia@partnersimatia.com', NULL, 'C:\partners\ImatiaPartners\angarcia@partnersimatia.com\Contrato_Adrian.txt', NULL);
INSERT INTO public.document_files VALUES (25, 'bbaa.pdf', NULL, 'juanperez@partnersimatia.com', NULL, 'C:\partners\ImatiaPartners\juanperez@partnersimatia.com\bbaa.pdf', 'Contrato');
INSERT INTO public.document_files VALUES (54, 'acuerdo_vanesa.txt', NULL, 'vanesalourido@imatia.es', NULL, 'C:\partners\ImatiaPartners\vanesalourido@imatia.es\acuerdo_vanesa.txt', NULL);
INSERT INTO public.document_files VALUES (55, 'contrato_vanesa.txt', NULL, 'vanesalourido@imatia.es', NULL, 'C:\partners\ImatiaPartners\vanesalourido@imatia.es\contrato_vanesa.txt', NULL);
INSERT INTO public.document_files VALUES (29, 'Abril_Yanhez_CV.pdf', NULL, 'angarcia@partnersimatia.com', NULL, 'C:\partners\ImatiaPartners\angarcia@partnersimatia.com\Abril_Yanhez_CV.pdf', 'angarcia@partnersimatia.com');
INSERT INTO public.document_files VALUES (30, 'Abril_Yanhez_Curriculum.pdf', NULL, 'angarcia@partnersimatia.com', NULL, 'C:\partners\ImatiaPartners\angarcia@partnersimatia.com\Abril_Yanhez_Curriculum.pdf', NULL);
INSERT INTO public.document_files VALUES (31, 'prueba.txt', NULL, 'angarcia@partnersimatia.com', NULL, 'C:\partners\ImatiaPartners\angarcia@partnersimatia.com\prueba.txt', NULL);
INSERT INTO public.document_files VALUES (64, 'Nda_Adrian.txt', NULL, 'adriicarrerafdez@gmail.com', NULL, 'C:\partners\ImatiaPartners\adriicarrerafdez@gmail.com\Nda_Adrian.txt', NULL);
INSERT INTO public.document_files VALUES (37, 'contratoPrueba.txt', NULL, 'pafernandez@partnersimatia.com', NULL, 'C:\partners\ImatiaPartners\pafernandez@partnersimatia.com\contratoPrueba.txt', 'Contrato  Paco ');


--
-- TOC entry 3129 (class 0 OID 261069)
-- Dependencies: 234
-- Data for Name: languages; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.languages VALUES (1, 'Spanish');
INSERT INTO public.languages VALUES (2, 'English');
INSERT INTO public.languages VALUES (3, 'French');
INSERT INTO public.languages VALUES (4, 'Portuguese');


--
-- TOC entry 3121 (class 0 OID 244793)
-- Dependencies: 226
-- Data for Name: personal_documents; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.personal_documents VALUES (1, 'Contratos');
INSERT INTO public.personal_documents VALUES (2, 'Acuerdo de confidencialidad (NDA)');
INSERT INTO public.personal_documents VALUES (3, 'Acuerdo de marketing y promoción');
INSERT INTO public.personal_documents VALUES (4, 'Acuerdo de suministro');


--
-- TOC entry 3115 (class 0 OID 215753)
-- Dependencies: 220
-- Data for Name: product_user; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.product_user VALUES ('angarcia@partnersimatia.com', 2);
INSERT INTO public.product_user VALUES ('pafernandez@partnersimatia.com', 4);
INSERT INTO public.product_user VALUES ('partner', 4);
INSERT INTO public.product_user VALUES ('pafernandez@partnersimatia.com', 3);
INSERT INTO public.product_user VALUES ('mamartinez@partnersimatia.com', 3);
INSERT INTO public.product_user VALUES ('angarcia@partnersimatia.com', 6);
INSERT INTO public.product_user VALUES ('angarcia@partnersimatia.com', 8);
INSERT INTO public.product_user VALUES ('damartinez@imatia.es', 16);
INSERT INTO public.product_user VALUES ('brvallejo@partnersimatia.com', 6);
INSERT INTO public.product_user VALUES ('savarela@partnerimatia.com', 8);
INSERT INTO public.product_user VALUES ('partner', 2);
INSERT INTO public.product_user VALUES ('grgomez@partnersimatia.com', 6);
INSERT INTO public.product_user VALUES ('savarela@partnerimatia.com', 16);
INSERT INTO public.product_user VALUES ('adriicarrerafdez@gmail.com', 8);
INSERT INTO public.product_user VALUES ('adriicarrerafdez@gmail.com', 24);
INSERT INTO public.product_user VALUES ('luciaviqueira@partnersimatia.com', 1);
INSERT INTO public.product_user VALUES ('luciaviqueira@partnersimatia.com', 16);
INSERT INTO public.product_user VALUES ('vanesalourido@imatia.es', 16);
INSERT INTO public.product_user VALUES ('iria.sanchezmedin@gmail.com', 8);
INSERT INTO public.product_user VALUES ('brvallejo@partnersimatia.com', 2);
INSERT INTO public.product_user VALUES ('angarcia@partnersimatia.com', 24);
INSERT INTO public.product_user VALUES ('brvallejo@partnersimatia.com', 1);
INSERT INTO public.product_user VALUES ('adriicarrerafdez@gmail.com', 1);
INSERT INTO public.product_user VALUES ('LorenaLopez@imatia.es', 8);
INSERT INTO public.product_user VALUES ('LorenaLopez@imatia.es', 9);
INSERT INTO public.product_user VALUES ('damartinez@imatia.es', 1);
INSERT INTO public.product_user VALUES ('adriicarrerafdez@gmail.com', 9);
INSERT INTO public.product_user VALUES ('angarcia@partnersimatia.com', 28);
INSERT INTO public.product_user VALUES ('daniellopez@imatia.es', 3);
INSERT INTO public.product_user VALUES ('daniellopez@imatia.es', 28);
INSERT INTO public.product_user VALUES ('daniellopez@imatia.es', 8);
INSERT INTO public.product_user VALUES ('brvallejo@partnersimatia.com', 8);
INSERT INTO public.product_user VALUES ('brvallejo@partnersimatia.com', 16);
INSERT INTO public.product_user VALUES ('brvallejo@partnersimatia.com', 3);
INSERT INTO public.product_user VALUES ('angarcia@partnersimatia.com', 16);
INSERT INTO public.product_user VALUES ('angarcia@partnersimatia.com', 1);
INSERT INTO public.product_user VALUES ('partner', 8);
INSERT INTO public.product_user VALUES ('partner', 16);
INSERT INTO public.product_user VALUES ('partner', 3);
INSERT INTO public.product_user VALUES ('juanperez@partnersimatia.com', 8);
INSERT INTO public.product_user VALUES ('juanperez@partnersimatia.com', 1);


--
-- TOC entry 3119 (class 0 OID 242500)
-- Dependencies: 224
-- Data for Name: productfiles; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.productfiles OVERRIDING SYSTEM VALUE VALUES (5, 5, 'bbaa.pdf', 'C:\partners\ImatiaPartners\5\bbaa.pdf');
INSERT INTO public.productfiles OVERRIDING SYSTEM VALUE VALUES (6, 9, 'bbaa.txt', 'C:\partners\ImatiaPartners\9\bbaa.txt');
INSERT INTO public.productfiles OVERRIDING SYSTEM VALUE VALUES (16, 16, 'Documentacion_Ontimize.txt', 'C:\partners\ImatiaPartners\16\Documentacion_Ontimize.txt');
INSERT INTO public.productfiles OVERRIDING SYSTEM VALUE VALUES (21, 17, 'sssssssssss.txt', 'C:\partners\ImatiaPartners\17\sssssssssss.txt');
INSERT INTO public.productfiles OVERRIDING SYSTEM VALUE VALUES (22, 3, '6012023107294.pdf', 'C:\partners\ImatiaPartners\3\6012023107294.pdf');
INSERT INTO public.productfiles OVERRIDING SYSTEM VALUE VALUES (23, 2, 'ejemplo.txt', 'C:\partners\ImatiaPartners\2\ejemplo.txt');
INSERT INTO public.productfiles OVERRIDING SYSTEM VALUE VALUES (25, 2, 'bbaa.pdf', 'C:\partners\ImatiaPartners\2\bbaa.pdf');
INSERT INTO public.productfiles OVERRIDING SYSTEM VALUE VALUES (28, 24, 'pablo.txt', 'C:\partners\ImatiaPartners\24\pablo.txt');
INSERT INTO public.productfiles OVERRIDING SYSTEM VALUE VALUES (31, 24, 'prueba2.txt', 'C:\partners\ImatiaPartners\24\prueba2.txt');
INSERT INTO public.productfiles OVERRIDING SYSTEM VALUE VALUES (35, 24, 'algo.txt', 'C:\partners\ImatiaPartners\24\algo.txt');
INSERT INTO public.productfiles OVERRIDING SYSTEM VALUE VALUES (39, 28, 'Contrato_Adrian.txt', 'C:\partners\ImatiaPartners\28\Contrato_Adrian.txt');
INSERT INTO public.productfiles OVERRIDING SYSTEM VALUE VALUES (40, 33, 'Nda_Adrian.txt', 'C:\partners\ImatiaPartners\33\Nda_Adrian.txt');
INSERT INTO public.productfiles OVERRIDING SYSTEM VALUE VALUES (41, 33, 'Contrato_Adrian.txt', 'C:\partners\ImatiaPartners\33\Contrato_Adrian.txt');
INSERT INTO public.productfiles OVERRIDING SYSTEM VALUE VALUES (42, 35, 'Imatia_Moda_Contrato.txt', 'C:\partners\ImatiaPartners\35\Imatia_Moda_Contrato.txt');
INSERT INTO public.productfiles OVERRIDING SYSTEM VALUE VALUES (43, 35, 'Imatia_Moda_Documentacion.txt', 'C:\partners\ImatiaPartners\35\Imatia_Moda_Documentacion.txt');
INSERT INTO public.productfiles OVERRIDING SYSTEM VALUE VALUES (44, 36, 'Imatia_Moda_Contrato.txt', 'C:\partners\ImatiaPartners\36\Imatia_Moda_Contrato.txt');
INSERT INTO public.productfiles OVERRIDING SYSTEM VALUE VALUES (45, 36, 'Imatia_Moda_Documentacion.txt', 'C:\partners\ImatiaPartners\36\Imatia_Moda_Documentacion.txt');
INSERT INTO public.productfiles OVERRIDING SYSTEM VALUE VALUES (47, 37, 'Imatia_Moda_Documentacion.txt', 'C:\partners\ImatiaPartners\37\Imatia_Moda_Documentacion.txt');
INSERT INTO public.productfiles OVERRIDING SYSTEM VALUE VALUES (48, 1, 'Instrucciones Software.pdf', 'C:\partners\ImatiaPartners\1\Instrucciones Software.pdf');
INSERT INTO public.productfiles OVERRIDING SYSTEM VALUE VALUES (49, 1, 'Notas Usuario.txt', 'C:\partners\ImatiaPartners\1\Notas Usuario.txt');
INSERT INTO public.productfiles OVERRIDING SYSTEM VALUE VALUES (51, 38, 'Imatia_Moda_Contrato.txt', 'C:\partners\ImatiaPartners\38\Imatia_Moda_Contrato.txt');
INSERT INTO public.productfiles OVERRIDING SYSTEM VALUE VALUES (52, 38, 'Imatia_Moda_Documentacion.txt', 'C:\partners\ImatiaPartners\38\Imatia_Moda_Documentacion.txt');
INSERT INTO public.productfiles OVERRIDING SYSTEM VALUE VALUES (53, 40, 'Imatia_Moda_Contrato.txt', 'C:\partners\ImatiaPartners\40\Imatia_Moda_Contrato.txt');
INSERT INTO public.productfiles OVERRIDING SYSTEM VALUE VALUES (54, 40, 'Imatia_Moda_Documentacion.txt', 'C:\partners\ImatiaPartners\40\Imatia_Moda_Documentacion.txt');


--
-- TOC entry 3114 (class 0 OID 215733)
-- Dependencies: 219
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.products OVERRIDING SYSTEM VALUE VALUES (33, 'Plataforma de Bienestar Social');
INSERT INTO public.products OVERRIDING SYSTEM VALUE VALUES (2, 'Software de gestión para empresas textiles');
INSERT INTO public.products OVERRIDING SYSTEM VALUE VALUES (4, 'Elastic Business ERP');
INSERT INTO public.products OVERRIDING SYSTEM VALUE VALUES (6, 'Control de accesos y visitas automatizado');
INSERT INTO public.products OVERRIDING SYSTEM VALUE VALUES (3, 'Inspección Lidar de volumen, peso y calidad');
INSERT INTO public.products OVERRIDING SYSTEM VALUE VALUES (5, 'Kit Digital');
INSERT INTO public.products OVERRIDING SYSTEM VALUE VALUES (1, 'Software Imatia');
INSERT INTO public.products OVERRIDING SYSTEM VALUE VALUES (9, 'Ontimize');
INSERT INTO public.products OVERRIDING SYSTEM VALUE VALUES (8, 'IWS');
INSERT INTO public.products OVERRIDING SYSTEM VALUE VALUES (24, 'Picking');
INSERT INTO public.products OVERRIDING SYSTEM VALUE VALUES (28, 'IDM');
INSERT INTO public.products OVERRIDING SYSTEM VALUE VALUES (29, 'Aquicultura');
INSERT INTO public.products OVERRIDING SYSTEM VALUE VALUES (16, 'Framework de Imatia');


--
-- TOC entry 3117 (class 0 OID 224128)
-- Dependencies: 222
-- Data for Name: resources; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.resources VALUES (2, 2, 'condiciones', 'doc');
INSERT INTO public.resources VALUES (3, 2, 'incidencias', 'pdf');
INSERT INTO public.resources VALUES (4, 3, 'contrato', 'pdf');
INSERT INTO public.resources VALUES (5, 3, 'instrucciones', 'doc');
INSERT INTO public.resources VALUES (6, 3, 'estadisticas', 'xlsx');
INSERT INTO public.resources VALUES (7, 4, 'contrato', 'pdf');
INSERT INTO public.resources VALUES (8, 4, 'registros', 'xlsx');
INSERT INTO public.resources VALUES (9, 5, 'resoluciones', 'pdf');
INSERT INTO public.resources VALUES (10, 5, 'estadisticas', 'xlsx');
INSERT INTO public.resources VALUES (11, 6, 'contrato', 'pdf');
INSERT INTO public.resources VALUES (1, 1, 'contrato', 'pdf');
INSERT INTO public.resources VALUES (12, 1, 'sugerencias', 'doc');
INSERT INTO public.resources VALUES (13, 1, 'funcionalidades', 'pdf');
INSERT INTO public.resources VALUES (14, 1, 'condiciones', 'doc');
INSERT INTO public.resources VALUES (16, 2, 'contrato', 'pdf');
INSERT INTO public.resources VALUES (17, 2, 'registros', 'xlsx');
INSERT INTO public.resources VALUES (18, 2, 'resoluciones', 'pdf');
INSERT INTO public.resources VALUES (19, 2, 'instrucciones', 'doc');
INSERT INTO public.resources VALUES (20, 3, 'registros', 'xlsx');
INSERT INTO public.resources VALUES (21, 3, 'incidencias', 'pdf');
INSERT INTO public.resources VALUES (22, 4, 'condiciones', 'doc');
INSERT INTO public.resources VALUES (23, 4, 'resoluciones', 'pdf');
INSERT INTO public.resources VALUES (24, 5, 'contrato', 'pdf');
INSERT INTO public.resources VALUES (25, 5, 'registros', 'xlsx');
INSERT INTO public.resources VALUES (26, 6, 'estadisticas', 'xlsx');
INSERT INTO public.resources VALUES (27, 6, 'condiciones', 'doc');


--
-- TOC entry 3094 (class 0 OID 215519)
-- Dependencies: 199
-- Data for Name: ti18n; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- TOC entry 3096 (class 0 OID 215527)
-- Dependencies: 201
-- Data for Name: ti18n_value; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- TOC entry 3097 (class 0 OID 215536)
-- Dependencies: 202
-- Data for Name: trequest_statistics; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- TOC entry 3099 (class 0 OID 215547)
-- Dependencies: 204
-- Data for Name: trole; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.trole OVERRIDING SYSTEM VALUE VALUES (1, 'admin', '<?xml version="1.0" encoding="UTF-8"?><security></security>');
INSERT INTO public.trole OVERRIDING SYSTEM VALUE VALUES (2, 'partner', '<?xml version="1.0" encoding="UTF-8"?><security></security>');


--
-- TOC entry 3110 (class 0 OID 215612)
-- Dependencies: 215
-- Data for Name: trole_server_permission; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- TOC entry 3101 (class 0 OID 215558)
-- Dependencies: 206
-- Data for Name: tserver_permission; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- TOC entry 3103 (class 0 OID 215569)
-- Dependencies: 208
-- Data for Name: tsetting; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- TOC entry 3104 (class 0 OID 215578)
-- Dependencies: 209
-- Data for Name: tuser; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.tuser VALUES ('LorenaLopez@imatia.es', 'abc123*', 'Lorena', 'Lopez', NULL, NULL, '2023-07-26 14:50:52.923014', true, 3, 2, 'Imatia');
INSERT INTO public.tuser VALUES ('pacogarcia@imatia.es', 'abc123*', 'Paco', 'Garcia', NULL, NULL, '2023-07-26 14:51:47.092086', true, NULL, NULL, NULL);
INSERT INTO public.tuser VALUES ('adriicarrerafdez@gmail.com', 'abc123*', 'Adrián', 'Carrera', NULL, NULL, '2023-07-18 09:16:55.921176', true, 23, 1, 'Imatia');
INSERT INTO public.tuser VALUES ('daniellopez@imatia.es', 'abc123*', 'Daniel', 'Lopez', NULL, NULL, '2023-07-27 11:22:46.457902', true, 35, 1, 'Imatia');
INSERT INTO public.tuser VALUES ('pagarcia@imatia.es', 'abc123*.', 'Pablo', 'Garcia', NULL, NULL, '2023-07-04 13:49:34.810714', true, NULL, NULL, NULL);
INSERT INTO public.tuser VALUES ('grgomez@partnersimatia.com', 'gregorio123*', 'Gregorio', 'Gomez', 'grgomez@partnersimatia.com', NULL, '2023-06-26 09:28:54.749', true, 205, 2, 'Junta de Castilla y León');
INSERT INTO public.tuser VALUES ('mamartinez@partnersimatia.com', 'manolo123*', 'Manolo', 'Martinez', 'mamartinez@partnersimatia.com', NULL, '2023-06-26 09:28:54.749', true, 204, 2, 'Xunta de Galicia');
INSERT INTO public.tuser VALUES ('pafernandez@partnersimatia.com', 'pafernandez123*', 'Paco', 'Fernandez', 'pafernandez@partnersimatia.com', NULL, '2023-06-26 09:28:54.749', true, 204, 2, 'Ayuntamiento de A Coruña');
INSERT INTO public.tuser VALUES ('damartinez@imatia.es', 'abc1234*', 'Daniel', 'Martinez', 'damartinez@imatia.es', NULL, '2023-06-26 09:28:54.749', true, 183, 1, 'R Cable');
INSERT INTO public.tuser VALUES ('partner', 'partner', 'Juanjo', 'Alvarez', 'partner@partnersimatia.com', NULL, '2023-06-02 10:09:40.48', true, 76, 2, 'Concello de Vigo');
INSERT INTO public.tuser VALUES ('juanperez@partnersimatia.com', 'abc123*', 'Juan', 'Perez', NULL, NULL, '2023-07-04 13:56:01.599', true, 76, 2, 'CRTVG
');
INSERT INTO public.tuser VALUES ('demo', 'demouser', 'demo', 'demo', 'demo@adminimatia.com', NULL, '2023-06-02 10:09:40.305', true, NULL, NULL, NULL);
INSERT INTO public.tuser VALUES ('savarela@partnerimatia.com', 'sara1234*', 'Sara', 'Varela', NULL, NULL, '2023-07-14 09:19:16.255145', true, 183, 1, 'Gas Natural');
INSERT INTO public.tuser VALUES ('saralopez@adminimatia.com', 'abc123*', 'Sara', 'Lopez', NULL, NULL, '2023-07-04 13:58:04.189888', true, NULL, NULL, NULL);
INSERT INTO public.tuser VALUES ('albafernandez@adminimatia.com', 'abc123*', 'Alba', 'Fernández', NULL, NULL, '2023-07-04 13:59:10.719477', true, NULL, NULL, NULL);
INSERT INTO public.tuser VALUES ('vanesalourido@imatia.es', 'vane123+', 'vanesa', 'lourido', NULL, NULL, '2023-07-18 09:37:29.511266', true, 183, 1, 'Imatia');
INSERT INTO public.tuser VALUES ('iria.sanchezmedin@gmail.com', '1234i*', 'Iria', 'Sanchez', NULL, NULL, '2023-07-18 13:37:38.325244', true, 183, 1, 'Imatia');
INSERT INTO public.tuser VALUES ('admin@adminimatia.com', 'admin', 'Millan', 'Dasairas', 'admin@adminimatia.com', NULL, '2023-06-26 09:28:54.749', true, NULL, NULL, NULL);
INSERT INTO public.tuser VALUES ('luciaviqueira@partnersimatia.com', 'lucia1234+', 'Lucia', 'Viqueira', NULL, NULL, '2023-07-18 09:38:04.081925', true, 183, 1, 'Imatia');
INSERT INTO public.tuser VALUES ('angarcia@partnersimatia.com', 'angarcia123*', 'Antonio', 'Garcia', 'angarcia@partnersimatia.com', NULL, '2023-06-26 09:28:54.749', true, 1, 2, 'Gas Natural Fenosa');
INSERT INTO public.tuser VALUES ('brvallejo@partnersimatia.com', 'brvallejo123*', 'Brigida', 'Vallejos', 'brvallejo@partnersimatia.com', NULL, '2023-06-26 09:28:54.749', true, 160, 1, 'Adif');


--
-- TOC entry 3106 (class 0 OID 215593)
-- Dependencies: 211
-- Data for Name: tuser_preference; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- TOC entry 3112 (class 0 OID 215632)
-- Dependencies: 217
-- Data for Name: tuser_role; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.tuser_role OVERRIDING SYSTEM VALUE VALUES (162, 1, 'pagarcia@imatia.es');
INSERT INTO public.tuser_role OVERRIDING SYSTEM VALUE VALUES (163, 2, 'juanperez@partnersimatia.com');
INSERT INTO public.tuser_role OVERRIDING SYSTEM VALUE VALUES (164, 1, 'saralopez@adminimatia.com');
INSERT INTO public.tuser_role OVERRIDING SYSTEM VALUE VALUES (165, 1, 'albafernandez@adminimatia.com');
INSERT INTO public.tuser_role OVERRIDING SYSTEM VALUE VALUES (2, 2, 'partner');
INSERT INTO public.tuser_role OVERRIDING SYSTEM VALUE VALUES (3, 1, 'demo');
INSERT INTO public.tuser_role OVERRIDING SYSTEM VALUE VALUES (170, 2, 'savarela@partnerimatia.com');
INSERT INTO public.tuser_role OVERRIDING SYSTEM VALUE VALUES (172, 2, 'adriicarrerafdez@gmail.com');
INSERT INTO public.tuser_role OVERRIDING SYSTEM VALUE VALUES (173, 2, 'vanesalourido@imatia.es');
INSERT INTO public.tuser_role OVERRIDING SYSTEM VALUE VALUES (174, 2, 'luciaviqueira@partnersimatia.com');
INSERT INTO public.tuser_role OVERRIDING SYSTEM VALUE VALUES (175, 2, 'iria.sanchezmedin@gmail.com');
INSERT INTO public.tuser_role OVERRIDING SYSTEM VALUE VALUES (179, 2, 'LorenaLopez@imatia.es');
INSERT INTO public.tuser_role OVERRIDING SYSTEM VALUE VALUES (180, 1, 'pacogarcia@imatia.es');
INSERT INTO public.tuser_role OVERRIDING SYSTEM VALUE VALUES (181, 2, 'daniellopez@imatia.es');
INSERT INTO public.tuser_role OVERRIDING SYSTEM VALUE VALUES (72, 2, 'grgomez@partnersimatia.com');
INSERT INTO public.tuser_role OVERRIDING SYSTEM VALUE VALUES (73, 2, 'angarcia@partnersimatia.com');
INSERT INTO public.tuser_role OVERRIDING SYSTEM VALUE VALUES (75, 2, 'mamartinez@partnersimatia.com');
INSERT INTO public.tuser_role OVERRIDING SYSTEM VALUE VALUES (76, 2, 'pafernandez@partnersimatia.com');
INSERT INTO public.tuser_role OVERRIDING SYSTEM VALUE VALUES (77, 1, 'admin@adminimatia.com');
INSERT INTO public.tuser_role OVERRIDING SYSTEM VALUE VALUES (78, 2, 'brvallejo@partnersimatia.com');
INSERT INTO public.tuser_role OVERRIDING SYSTEM VALUE VALUES (80, 2, 'damartinez@imatia.es');


--
-- TOC entry 3125 (class 0 OID 261026)
-- Dependencies: 230
-- Data for Name: user_countries; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- TOC entry 3108 (class 0 OID 215604)
-- Dependencies: 213
-- Data for Name: user_roles; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- TOC entry 3144 (class 0 OID 0)
-- Dependencies: 231
-- Name: countries_id_country_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.countries_id_country_seq', 214, true);


--
-- TOC entry 3145 (class 0 OID 0)
-- Dependencies: 227
-- Name: document_files_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.document_files_id_seq', 64, true);


--
-- TOC entry 3146 (class 0 OID 0)
-- Dependencies: 233
-- Name: languages_id_language_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.languages_id_language_seq', 4, true);


--
-- TOC entry 3147 (class 0 OID 0)
-- Dependencies: 225
-- Name: personal_documents_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.personal_documents_id_seq', 6, true);


--
-- TOC entry 3148 (class 0 OID 0)
-- Dependencies: 223
-- Name: productfiles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.productfiles_id_seq', 54, true);


--
-- TOC entry 3149 (class 0 OID 0)
-- Dependencies: 218
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.products_id_seq', 40, true);


--
-- TOC entry 3150 (class 0 OID 0)
-- Dependencies: 221
-- Name: resources_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.resources_id_seq', 1, true);


--
-- TOC entry 3151 (class 0 OID 0)
-- Dependencies: 198
-- Name: ti18n_id_i18n_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.ti18n_id_i18n_seq', 1, false);


--
-- TOC entry 3152 (class 0 OID 0)
-- Dependencies: 200
-- Name: ti18n_value_id_i18n_value_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.ti18n_value_id_i18n_value_seq', 1, false);


--
-- TOC entry 3153 (class 0 OID 0)
-- Dependencies: 203
-- Name: trole_id_rolename_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.trole_id_rolename_seq', 2, true);


--
-- TOC entry 3154 (class 0 OID 0)
-- Dependencies: 214
-- Name: trole_server_permission_id_role_server_permission_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.trole_server_permission_id_role_server_permission_seq', 1, false);


--
-- TOC entry 3155 (class 0 OID 0)
-- Dependencies: 205
-- Name: tserver_permission_id_server_permission_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.tserver_permission_id_server_permission_seq', 1, false);


--
-- TOC entry 3156 (class 0 OID 0)
-- Dependencies: 207
-- Name: tsetting_id_setting_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.tsetting_id_setting_seq', 1, false);


--
-- TOC entry 3157 (class 0 OID 0)
-- Dependencies: 210
-- Name: tuser_preference_id_user_preference_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.tuser_preference_id_user_preference_seq', 1, false);


--
-- TOC entry 3158 (class 0 OID 0)
-- Dependencies: 216
-- Name: tuser_role_id_user_role_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.tuser_role_id_user_role_seq', 181, true);


--
-- TOC entry 3159 (class 0 OID 0)
-- Dependencies: 229
-- Name: user_countries_id_user_country_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.user_countries_id_user_country_seq', 8, true);


--
-- TOC entry 3160 (class 0 OID 0)
-- Dependencies: 212
-- Name: user_roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.user_roles_id_seq', 1, false);


--
-- TOC entry 2956 (class 2606 OID 261044)
-- Name: countries countries_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.countries
    ADD CONSTRAINT countries_pkey PRIMARY KEY (id);


--
-- TOC entry 2952 (class 2606 OID 253340)
-- Name: document_files document_files_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.document_files
    ADD CONSTRAINT document_files_pkey PRIMARY KEY (id);


--
-- TOC entry 2958 (class 2606 OID 261074)
-- Name: languages languages_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.languages
    ADD CONSTRAINT languages_pkey PRIMARY KEY (id);


--
-- TOC entry 2950 (class 2606 OID 244798)
-- Name: personal_documents personal_documents_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.personal_documents
    ADD CONSTRAINT personal_documents_pkey PRIMARY KEY (id);


--
-- TOC entry 2906 (class 2606 OID 215523)
-- Name: ti18n pk_ti18n; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ti18n
    ADD CONSTRAINT pk_ti18n PRIMARY KEY (id_i18n);


--
-- TOC entry 2944 (class 2606 OID 215757)
-- Name: product_user product_user_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.product_user
    ADD CONSTRAINT product_user_pk PRIMARY KEY (product_id, user_id);


--
-- TOC entry 2948 (class 2606 OID 242507)
-- Name: productfiles productfiles_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.productfiles
    ADD CONSTRAINT productfiles_pkey PRIMARY KEY (id);


--
-- TOC entry 2942 (class 2606 OID 215737)
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- TOC entry 2946 (class 2606 OID 224133)
-- Name: resources resources_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.resources
    ADD CONSTRAINT resources_pkey PRIMARY KEY (id);


--
-- TOC entry 2925 (class 2606 OID 215587)
-- Name: tuser sys_pk_10092; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tuser
    ADD CONSTRAINT sys_pk_10092 PRIMARY KEY (user_);


--
-- TOC entry 2916 (class 2606 OID 215554)
-- Name: trole sys_pk_10096; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trole
    ADD CONSTRAINT sys_pk_10096 PRIMARY KEY (id_rolename);


--
-- TOC entry 2940 (class 2606 OID 215636)
-- Name: tuser_role sys_pk_10100; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tuser_role
    ADD CONSTRAINT sys_pk_10100 PRIMARY KEY (id_user_role);


--
-- TOC entry 2919 (class 2606 OID 215565)
-- Name: tserver_permission sys_pk_10108; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tserver_permission
    ADD CONSTRAINT sys_pk_10108 PRIMARY KEY (id_server_permission);


--
-- TOC entry 2913 (class 2606 OID 215543)
-- Name: trequest_statistics sys_pk_10112; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trequest_statistics
    ADD CONSTRAINT sys_pk_10112 PRIMARY KEY (id_request_statistics);


--
-- TOC entry 2922 (class 2606 OID 215576)
-- Name: tsetting sys_pk_10116; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tsetting
    ADD CONSTRAINT sys_pk_10116 PRIMARY KEY (id_setting);


--
-- TOC entry 2928 (class 2606 OID 215600)
-- Name: tuser_preference sys_pk_10120; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tuser_preference
    ADD CONSTRAINT sys_pk_10120 PRIMARY KEY (id_user_preference);


--
-- TOC entry 2910 (class 2606 OID 215534)
-- Name: ti18n_value sys_pk_10128; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ti18n_value
    ADD CONSTRAINT sys_pk_10128 PRIMARY KEY (id_i18n_value);


--
-- TOC entry 2935 (class 2606 OID 215616)
-- Name: trole_server_permission sys_pk_10134; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trole_server_permission
    ADD CONSTRAINT sys_pk_10134 PRIMARY KEY (id_role_server_permission);


--
-- TOC entry 2954 (class 2606 OID 261031)
-- Name: user_countries user_countries_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user_countries
    ADD CONSTRAINT user_countries_pkey PRIMARY KEY (id_user_country);


--
-- TOC entry 2930 (class 2606 OID 215609)
-- Name: user_roles user_roles_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_pkey PRIMARY KEY (id);


--
-- TOC entry 2936 (class 1259 OID 215647)
-- Name: sys_idx_10103; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX sys_idx_10103 ON public.tuser_role USING btree (user_);


--
-- TOC entry 2937 (class 1259 OID 215648)
-- Name: sys_idx_10105; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX sys_idx_10105 ON public.tuser_role USING btree (id_rolename);


--
-- TOC entry 2931 (class 1259 OID 215627)
-- Name: sys_idx_10137; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX sys_idx_10137 ON public.trole_server_permission USING btree (id_rolename);


--
-- TOC entry 2932 (class 1259 OID 215628)
-- Name: sys_idx_10139; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX sys_idx_10139 ON public.trole_server_permission USING btree (id_server_permission);


--
-- TOC entry 2923 (class 1259 OID 215590)
-- Name: sys_idx_sys_pk_10092_10093; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX sys_idx_sys_pk_10092_10093 ON public.tuser USING btree (user_);


--
-- TOC entry 2914 (class 1259 OID 215555)
-- Name: sys_idx_sys_pk_10096_10097; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX sys_idx_sys_pk_10096_10097 ON public.trole USING btree (id_rolename);


--
-- TOC entry 2938 (class 1259 OID 215649)
-- Name: sys_idx_sys_pk_10100_10101; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX sys_idx_sys_pk_10100_10101 ON public.tuser_role USING btree (id_user_role);


--
-- TOC entry 2917 (class 1259 OID 215566)
-- Name: sys_idx_sys_pk_10108_10109; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX sys_idx_sys_pk_10108_10109 ON public.tserver_permission USING btree (id_server_permission);


--
-- TOC entry 2911 (class 1259 OID 215544)
-- Name: sys_idx_sys_pk_10112_10113; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX sys_idx_sys_pk_10112_10113 ON public.trequest_statistics USING btree (id_request_statistics);


--
-- TOC entry 2920 (class 1259 OID 215577)
-- Name: sys_idx_sys_pk_10116_10117; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX sys_idx_sys_pk_10116_10117 ON public.tsetting USING btree (id_setting);


--
-- TOC entry 2926 (class 1259 OID 215601)
-- Name: sys_idx_sys_pk_10120_10121; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX sys_idx_sys_pk_10120_10121 ON public.tuser_preference USING btree (id_user_preference);


--
-- TOC entry 2907 (class 1259 OID 215524)
-- Name: sys_idx_sys_pk_10124_10125; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX sys_idx_sys_pk_10124_10125 ON public.ti18n USING btree (id_i18n);


--
-- TOC entry 2908 (class 1259 OID 215535)
-- Name: sys_idx_sys_pk_10128_10130; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX sys_idx_sys_pk_10128_10130 ON public.ti18n_value USING btree (id_i18n_value);


--
-- TOC entry 2933 (class 1259 OID 215629)
-- Name: sys_idx_sys_pk_10134_10135; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX sys_idx_sys_pk_10134_10135 ON public.trole_server_permission USING btree (id_role_server_permission);


--
-- TOC entry 2969 (class 2606 OID 253346)
-- Name: document_files document_files_personal_document_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.document_files
    ADD CONSTRAINT document_files_personal_document_id_fkey FOREIGN KEY (personal_document_id) REFERENCES public.personal_documents(id);


--
-- TOC entry 2968 (class 2606 OID 253341)
-- Name: document_files document_files_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.document_files
    ADD CONSTRAINT document_files_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.tuser(user_);


--
-- TOC entry 2965 (class 2606 OID 226820)
-- Name: product_user fk_product; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.product_user
    ADD CONSTRAINT fk_product FOREIGN KEY (product_id) REFERENCES public.products(id) ON DELETE CASCADE;


--
-- TOC entry 2963 (class 2606 OID 215637)
-- Name: tuser_role fk_trole; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tuser_role
    ADD CONSTRAINT fk_trole FOREIGN KEY (id_rolename) REFERENCES public.trole(id_rolename);


--
-- TOC entry 2961 (class 2606 OID 215617)
-- Name: trole_server_permission fk_trole_server_permission; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trole_server_permission
    ADD CONSTRAINT fk_trole_server_permission FOREIGN KEY (id_rolename) REFERENCES public.trole(id_rolename);


--
-- TOC entry 2962 (class 2606 OID 215622)
-- Name: trole_server_permission fk_tserver_permission; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trole_server_permission
    ADD CONSTRAINT fk_tserver_permission FOREIGN KEY (id_server_permission) REFERENCES public.tserver_permission(id_server_permission);


--
-- TOC entry 2964 (class 2606 OID 216877)
-- Name: tuser_role fk_tuser; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tuser_role
    ADD CONSTRAINT fk_tuser FOREIGN KEY (user_) REFERENCES public.tuser(user_) ON DELETE CASCADE;


--
-- TOC entry 2959 (class 2606 OID 261062)
-- Name: tuser fk_tuser_id_country; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tuser
    ADD CONSTRAINT fk_tuser_id_country FOREIGN KEY (id_country) REFERENCES public.countries(id);


--
-- TOC entry 2960 (class 2606 OID 261075)
-- Name: tuser fk_tuser_id_language; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tuser
    ADD CONSTRAINT fk_tuser_id_language FOREIGN KEY (id_language) REFERENCES public.languages(id);


--
-- TOC entry 2966 (class 2606 OID 230211)
-- Name: product_user fk_user; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.product_user
    ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES public.tuser(user_) ON DELETE CASCADE;


--
-- TOC entry 2967 (class 2606 OID 224134)
-- Name: resources resources_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.resources
    ADD CONSTRAINT resources_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id);


--
-- TOC entry 2971 (class 2606 OID 261050)
-- Name: user_countries user_countries_id_country_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user_countries
    ADD CONSTRAINT user_countries_id_country_fkey FOREIGN KEY (id_country) REFERENCES public.countries(id);


--
-- TOC entry 2970 (class 2606 OID 261032)
-- Name: user_countries user_countries_user__fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user_countries
    ADD CONSTRAINT user_countries_user__fkey FOREIGN KEY (user_) REFERENCES public.tuser(user_);


-- Completed on 2023-07-27 12:54:51

--
-- PostgreSQL database dump complete
--

