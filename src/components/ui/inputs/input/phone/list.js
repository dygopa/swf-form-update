export const countryCodes = [
    {
        name: 'Afganistán',
        code: 'AF',
        dialCode: '+93',
        icon: '🇦🇫',
        format: (v) => v, // Formato genérico, no hay un patrón de guiones tan común
        length: 9
    },
    {
        name: 'Albania',
        code: 'AL',
        dialCode: '+355',
        icon: '🇦🇱',
        format: (v) => v.replace(/(\d{3})(\d{3})(\d{3})/, "$1-$2-$3"),
        length: 9
    },
    {
        name: 'Alemania',
        code: 'DE',
        dialCode: '+49',
        icon: '🇩🇪',
        // Los números alemanes son complejos; esto es una simplificación
        format: (v) => v.replace(/(\d{3,4})(\d{3,})/, "$1 $2"),
        length: 9
    },
    {
        name: 'Andorra',
        code: 'AD',
        dialCode: '+376',
        icon: '🇦🇩',
        format: (v) => v.replace(/(\d{3})(\d{3})/, "$1 $2"),
        length: 6
    },
    {
        name: 'Angola',
        code: 'AO',
        dialCode: '+244',
        icon: '🇦🇴',
        format: (v) => v.replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3"),
        length: 9
    },
    {
        name: 'Antigua y Barbuda',
        code: 'AG',
        dialCode: '+1-268',
        icon: '🇦🇬',
        format: (v) => v.replace(/(\d{3})(\d{4})/, "$1-$2"),
        length: 7
    },
    {
        name: 'Arabia Saudita',
        code: 'SA',
        dialCode: '+966',
        icon: '🇸🇦',
        format: (v) => v.replace(/(\d{2})(\d{3})(\d{4})/, "$1 $2 $3"),
        length: 9
    },
    {
        name: 'Argelia',
        code: 'DZ',
        dialCode: '+213',
        icon: '🇩🇿',
        format: (v) => v.replace(/(\d{3})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4"),
        length: 9
    },
    {
        name: 'Argentina',
        code: 'AR',
        dialCode: '+54',
        icon: '🇦🇷',
        // Argentina tiene variantes, esto es un formato común para celulares (sin el 9 y sin el 15)
        format: (v) => v.replace(/(\d{4})(\d{4})/, "$1-$2"),
        length: 8
    },
    {
        name: 'Armenia',
        code: 'AM',
        dialCode: '+374',
        icon: '🇦🇲',
        format: (v) => v.replace(/(\d{2})(\d{3})(\d{3})/, "$1 $2 $3"),
        length: 8
    },
    {
        name: 'Australia',
        code: 'AU',
        dialCode: '+61',
        icon: '🇦🇺',
        format: (v) => v.replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3"),
        length: 10
    },
    {
        name: 'Austria',
        code: 'AT',
        dialCode: '+43',
        icon: '🇦🇹',
        format: (v) => v.replace(/(\d{3,4})(\d{3,})/, "$1 $2"), // Varía
        length: 10
    },
    {
        name: 'Azerbaiyán',
        code: 'AZ',
        dialCode: '+994',
        icon: '🇦🇿',
        format: (v) => v.replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4"),
        length: 9
    },
    {
        name: 'Bahamas',
        code: 'BS',
        dialCode: '+1-242',
        icon: '🇧🇸',
        format: (v) => v.replace(/(\d{3})(\d{4})/, "$1-$2"),
        length: 7
    },
    {
        name: 'Bangladés',
        code: 'BD',
        dialCode: '+880',
        icon: '🇧🇩',
        format: (v) => v.replace(/(\d{4})(\d{6})/, "$1-$2"),
        length: 10
    },
    {
        name: 'Barbados',
        code: 'BB',
        dialCode: '+1-246',
        icon: '🇧🇧',
        format: (v) => v.replace(/(\d{3})(\d{4})/, "$1-$2"),
        length: 7
    },
    {
        name: 'Baréin',
        code: 'BH',
        dialCode: '+973',
        icon: '🇧🇭',
        format: (v) => v.replace(/(\d{4})(\d{4})/, "$1 $2"),
        length: 8
    },
    {
        name: 'Bélgica',
        code: 'BE',
        dialCode: '+32',
        icon: '🇧🇪',
        format: (v) => v.replace(/(\d{3})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4"),
        length: 9
    },
    {
        name: 'Belice',
        code: 'BZ',
        dialCode: '+501',
        icon: '🇧🇿',
        format: (v) => v.replace(/(\d{3})(\d{4})/, "$1-$2"),
        length: 7
    },
    {
        name: 'Benín',
        code: 'BJ',
        dialCode: '+229',
        icon: '🇧🇯',
        format: (v) => v.replace(/(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4"),
        length: 8
    },
    {
        name: 'Bielorrusia',
        code: 'BY',
        dialCode: '+375',
        icon: '🇧🇾',
        format: (v) => v.replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, "$1 $2-$3-$4"),
        length: 9
    },
    {
        name: 'Birmania (Myanmar)',
        code: 'MM',
        dialCode: '+95',
        icon: '🇲🇲',
        format: (v) => v, // Varios formatos
        length: 9
    },
    {
        name: 'Bolivia',
        code: 'BO',
        dialCode: '+591',
        icon: '🇧🇴',
        format: (v) => v.replace(/(\d{4})(\d{4})/, "$1-$2"),
        length: 8
    },
    {
        name: 'Bosnia y Herzegovina',
        code: 'BA',
        dialCode: '+387',
        icon: '🇧🇦',
        format: (v) => v.replace(/(\d{2})(\d{3})(\d{3})/, "$1 $2 $3"),
        length: 8
    },
    {
        name: 'Botsuana',
        code: 'BW',
        dialCode: '+267',
        icon: '🇧🇼',
        format: (v) => v.replace(/(\d{2})(\d{3})(\d{3})/, "$1 $2 $3"),
        length: 8
    },
    {
        name: 'Brasil',
        code: 'BR',
        dialCode: '+55',
        icon: '🇧🇷',
        // Brasil: (XX) XXXX-XXXX or (XX) XXXXX-XXXX for cell
        format: (v) => v.replace(/(\d{2})(\d{4,5})(\d{4})/, "($1) $2-$3"),
        length: 10
    },
    {
        name: 'Brunéi',
        code: 'BN',
        dialCode: '+673',
        icon: '🇧🇳',
        format: (v) => v.replace(/(\d{3})(\d{4})/, "$1 $2"),
        length: 7
    },
    {
        name: 'Bulgaria',
        code: 'BG',
        dialCode: '+359',
        icon: '🇧🇬',
        format: (v) => v.replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3"),
        length: 9
    },
    {
        name: 'Burkina Faso',
        code: 'BF',
        dialCode: '+226',
        icon: '🇧🇫',
        format: (v) => v.replace(/(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4"),
        length: 8
    },
    {
        name: 'Burundi',
        code: 'BI',
        dialCode: '+257',
        icon: '🇧🇮',
        format: (v) => v.replace(/(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4"),
        length: 8
    },
    {
        name: 'Bután',
        code: 'BT',
        dialCode: '+975',
        icon: '🇧🇹',
        format: (v) => v.replace(/(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4"),
        length: 8
    },
    {
        name: 'Cabo Verde',
        code: 'CV',
        dialCode: '+238',
        icon: '🇨🇻',
        format: (v) => v.replace(/(\d{3})(\d{4})/, "$1 $2"),
        length: 7
    },
    {
        name: 'Camboya',
        code: 'KH',
        dialCode: '+855',
        icon: '🇰🇭',
        format: (v) => v.replace(/(\d{2})(\d{3})(\d{3,4})/, "$1 $2 $3"),
        length: 8
    },
    {
        name: 'Camerún',
        code: 'CM',
        dialCode: '+237',
        icon: '🇨🇲',
        format: (v) => v.replace(/(\d)(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4 $5"),
        length: 9
    },
    {
        name: 'Canadá',
        code: 'CA',
        dialCode: '+1',
        icon: '🇨🇦',
        format: (v) => v.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3"),
        length: 10
    },
    {
        name: 'Chad',
        code: 'TD',
        dialCode: '+235',
        icon: '🇹🇩',
        format: (v) => v.replace(/(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4"),
        length: 8
    },
    {
        name: 'Chile',
        code: 'CL',
        dialCode: '+56',
        icon: '🇨🇱',
        format: (v) => v.replace(/(\d{4})(\d{4})/, "$1 $2"),
        length: 8
    },
    {
        name: 'China',
        code: 'CN',
        dialCode: '+86',
        icon: '🇨🇳',
        format: (v) => v.replace(/(\d{3})(\d{4})(\d{4})/, "$1 $2 $3"),
        length: 11
    },
    {
        name: 'Chipre',
        code: 'CY',
        dialCode: '+357',
        icon: '🇨🇾',
        format: (v) => v.replace(/(\d{2})(\d{3})(\d{3})/, "$1 $2 $3"),
        length: 8
    },
    {
        name: 'Colombia',
        code: 'CO',
        dialCode: '+57',
        icon: '🇨🇴',
        format: (v) => v.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3"), // Celular
        length: 10
    },
    {
        name: 'Comoras',
        code: 'KM',
        dialCode: '+269',
        icon: '🇰🇲',
        format: (v) => v.replace(/(\d{3})(\d{4})/, "$1 $2"),
        length: 7
    },
    {
        name: 'Congo (República Democrática del)',
        code: 'CD',
        dialCode: '+243',
        icon: '🇨🇩',
        format: (v) => v.replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3"),
        length: 9
    },
    {
        name: 'Congo (República del)',
        code: 'CG',
        dialCode: '+242',
        icon: '🇨🇬',
        format: (v) => v.replace(/(\d{3})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4"),
        length: 9
    },
    {
        name: 'Corea del Norte',
        code: 'KP',
        dialCode: '+850',
        icon: '🇰🇵',
        format: (v) => v,
        length: 7
    },
    {
        name: 'Corea del Sur',
        code: 'KR',
        dialCode: '+82',
        icon: '🇰🇷',
        format: (v) => v.replace(/(\d{2,3})(\d{3,4})(\d{4})/, "$1-$2-$3"),
        length: 9
    },
    {
        name: 'Costa de Marfil',
        code: 'CI',
        dialCode: '+225',
        icon: '🇨🇮',
        format: (v) => v.replace(/(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4"),
        length: 8
    },
    {
        name: 'Costa Rica',
        code: 'CR',
        dialCode: '+506',
        icon: '🇨🇷',
        format: (v) => v.replace(/(\d{4})(\d{4})/, "$1-$2"),
        length: 8
    },
    {
        name: 'Croacia',
        code: 'HR',
        dialCode: '+385',
        icon: '🇭🇷',
        format: (v) => v.replace(/(\d{2})(\d{3})(\d{3,4})/, "$1 $2 $3"),
        length: 8
    },
    {
        name: 'Cuba',
        code: 'CU',
        dialCode: '+53',
        icon: '🇨🇺',
        format: (v) => v.replace(/(\d)(\d{7})/, "$1 $2"),
        length: 8
    },
    {
        name: 'Dinamarca',
        code: 'DK',
        dialCode: '+45',
        icon: '🇩🇰',
        format: (v) => v.replace(/(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4"),
        length: 8
    },
    {
        name: 'Yibuti',
        code: 'DJ',
        dialCode: '+253',
        icon: '🇩🇯',
        format: (v) => v.replace(/(\d)(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4"),
        length: 8
    },
    {
        name: 'Dominica',
        code: 'DM',
        dialCode: '+1-767',
        icon: '🇩🇲',
        format: (v) => v.replace(/(\d{3})(\d{4})/, "$1-$2"),
        length: 7
    },
    {
        name: 'República Dominicana',
        code: 'DO',
        dialCode: '+1-809',
        icon: '🇩🇴',
        format: (v) => v.replace(/(\d{3})(\d{4})/, "$1-$2"),
        length: 7
    },
    {
        name: 'Ecuador',
        code: 'EC',
        dialCode: '+593',
        icon: '🇪🇨',
        format: (v) => v.replace(/(\d{2})(\d{3})(\d{4})/, "$1 $2 $3"),
        length: 9
    },
    {
        name: 'Egipto',
        code: 'EG',
        dialCode: '+20',
        icon: '🇪🇬',
        format: (v) => v.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3"),
        length: 10
    },
    {
        name: 'El Salvador',
        code: 'SV',
        dialCode: '+503',
        icon: '🇸🇻',
        format: (v) => v.replace(/(\d{4})(\d{4})/, "$1-$2"),
        length: 8
    },
    {
        name: 'Emiratos Árabes Unidos',
        code: 'AE',
        dialCode: '+971',
        icon: '🇦🇪',
        format: (v) => v.replace(/(\d)(\d{3})(\d{4})/, "$1 $2 $3"),
        length: 9
    },
    {
        name: 'Eritrea',
        code: 'ER',
        dialCode: '+291',
        icon: '🇪🇷',
        format: (v) => v.replace(/(\d)(\d{3})(\d{3})/, "$1 $2 $3"),
        length: 7
    },
    {
        name: 'Eslovaquia',
        code: 'SK',
        dialCode: '+421',
        icon: '🇸🇰',
        format: (v) => v.replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3"),
        length: 9
    },
    {
        name: 'Eslovenia',
        code: 'SI',
        dialCode: '+386',
        icon: '🇸🇮',
        format: (v) => v.replace(/(\d)(\d{3})(\d{3})/, "$1 $2 $3"),
        length: 8
    },
    {
        name: 'España',
        code: 'ES',
        dialCode: '+34',
        icon: '🇪🇸',
        format: (v) => v.replace(/(\d{3})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4"),
        length: 9
    },
    {
        name: 'Estados Unidos',
        code: 'US',
        dialCode: '+1',
        icon: '🇺🇸',
        format: (v) => v.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3"),
        length: 10
    },
    {
        name: 'Estonia',
        code: 'EE',
        dialCode: '+372',
        icon: '🇪🇪',
        format: (v) => v.replace(/(\d{3})(\d{4})/, "$1 $2"),
        length: 7
    },
    {
        name: 'Esuatini (Suazilandia)',
        code: 'SZ',
        dialCode: '+268',
        icon: '🇸🇿',
        format: (v) => v.replace(/(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4"),
        length: 8
    },
    {
        name: 'Etiopía',
        code: 'ET',
        dialCode: '+251',
        icon: '🇪🇹',
        format: (v) => v.replace(/(\d)(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4 $5"),
        length: 9
    },
    {
        name: 'Filipinas',
        code: 'PH',
        dialCode: '+63',
        icon: '🇵🇭',
        format: (v) => v.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"),
        length: 10
    },
    {
        name: 'Finlandia',
        code: 'FI',
        dialCode: '+358',
        icon: '🇫🇮',
        format: (v) => v.replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4"),
        length: 9
    },
    {
        name: 'Fiyi',
        code: 'FJ',
        dialCode: '+679',
        icon: '🇫🇯',
        format: (v) => v.replace(/(\d{3})(\d{4})/, "$1 $2"),
        length: 7
    },
    {
        name: 'Francia',
        code: 'FR',
        dialCode: '+33',
        icon: '🇫🇷',
        format: (v) => v.replace(/(\d)(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4 $5"),
        length: 9
    },
    {
        name: 'Gabón',
        code: 'GA',
        dialCode: '+241',
        icon: '🇬🇦',
        format: (v) => v.replace(/(\d)(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4 $5"),
        length: 9
    },
    {
        name: 'Gambia',
        code: 'GM',
        dialCode: '+220',
        icon: '🇬🇲',
        format: (v) => v.replace(/(\d{3})(\d{4})/, "$1 $2"),
        length: 7
    },
    {
        name: 'Georgia',
        code: 'GE',
        dialCode: '+995',
        icon: '🇬🇪',
        format: (v) => v.replace(/(\d{3})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4"),
        length: 9
    },
    {
        name: 'Ghana',
        code: 'GH',
        dialCode: '+233',
        icon: '🇬🇭',
        format: (v) => v.replace(/(\d{2})(\d{3})(\d{4})/, "$1 $2 $3"),
        length: 9
    },
    {
        name: 'Granada',
        code: 'GD',
        dialCode: '+1-473',
        icon: '🇬🇩',
        format: (v) => v.replace(/(\d{3})(\d{4})/, "$1-$2"),
        length: 7
    },
    {
        name: 'Grecia',
        code: 'GR',
        dialCode: '+30',
        icon: '🇬🇷',
        format: (v) => v.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3"),
        length: 10
    },
    {
        name: 'Guatemala',
        code: 'GT',
        dialCode: '+502',
        icon: '🇬🇹',
        format: (v) => v.replace(/(\d{4})(\d{4})/, "$1-$2"),
        length: 8
    },
    {
        name: 'Guinea',
        code: 'GN',
        dialCode: '+224',
        icon: '🇬🇳',
        format: (v) => v.replace(/(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4"),
        length: 8
    },
    {
        name: 'Guinea Ecuatorial',
        code: 'GQ',
        dialCode: '+240',
        icon: '🇬🇶',
        format: (v) => v.replace(/(\d{3})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4"),
        length: 9
    },
    {
        name: 'Guinea-Bisáu',
        code: 'GW',
        dialCode: '+245',
        icon: '🇬🇼',
        format: (v) => v.replace(/(\d{3})(\d{4})/, "$1 $2"),
        length: 7
    },
    {
        name: 'Guyana',
        code: 'GY',
        dialCode: '+592',
        icon: '🇬🇾',
        format: (v) => v.replace(/(\d{4})(\d{3})/, "$1 $2"),
        length: 7
    },
    {
        name: 'Haití',
        code: 'HT',
        dialCode: '+509',
        icon: '🇭🇹',
        format: (v) => v.replace(/(\d{4})(\d{4})/, "$1 $2"),
        length: 8
    },
    {
        name: 'Honduras',
        code: 'HN',
        dialCode: '+504',
        icon: '🇭🇳',
        format: (v) => v.replace(/(\d{4})(\d{4})/, "$1-$2"),
        length: 8
    },
    {
        name: 'Hong Kong',
        code: 'HK',
        dialCode: '+852',
        icon: '🇭🇰',
        format: (v) => v.replace(/(\d{4})(\d{4})/, "$1 $2"),
        length: 8
    },
    {
        name: 'Hungría',
        code: 'HU',
        dialCode: '+36',
        icon: '🇭🇺',
        format: (v) => v.replace(/(\d{2})(\d{3})(\d{4})/, "$1 $2 $3"),
        length: 9
    },
    {
        name: 'India',
        code: 'IN',
        dialCode: '+91',
        icon: '🇮🇳',
        format: (v) => v.replace(/(\d{5})(\d{5})/, "$1 $2"),
        length: 10
    },
    {
        name: 'Indonesia',
        code: 'ID',
        dialCode: '+62',
        icon: '🇮🇩',
        format: (v) => v.replace(/(\d{3,4})(\d{3,4})(\d{3,4})/, "$1-$2-$3"),
        length: 10
    },
    {
        name: 'Irak',
        code: 'IQ',
        dialCode: '+964',
        icon: '🇮🇶',
        format: (v) => v.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3"),
        length: 10
    },
    {
        name: 'Irán',
        code: 'IR',
        dialCode: '+98',
        icon: '🇮🇷',
        format: (v) => v.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3"),
        length: 10
    },
    {
        name: 'Irlanda',
        code: 'IE',
        dialCode: '+353',
        icon: '🇮🇪',
        format: (v) => v.replace(/(\d{2})(\d{3})(\d{4})/, "$1 $2 $3"),
        length: 9
    },
    {
        name: 'Islandia',
        code: 'IS',
        dialCode: '+354',
        icon: '🇮🇸',
        format: (v) => v.replace(/(\d{3})(\d{4})/, "$1 $2"),
        length: 7
    },
    {
        name: 'Islas Marshall',
        code: 'MH',
        dialCode: '+692',
        icon: '🇲🇭',
        format: (v) => v.replace(/(\d{3})(\d{4})/, "$1-$2"),
        length: 7
    },
    {
        name: 'Islas Salomón',
        code: 'SB',
        dialCode: '+677',
        icon: '🇸🇧',
        format: (v) => v.replace(/(\d{3})(\d{4})/, "$1 $2"),
        length: 7
    },
    {
        name: 'Israel',
        code: 'IL',
        dialCode: '+972',
        icon: '🇮🇱',
        format: (v) => v.replace(/(\d)(\d{3})(\d{4})/, "$1-$2-$3"),
        length: 9
    },
    {
        name: 'Italia',
        code: 'IT',
        dialCode: '+39',
        icon: '🇮🇹',
        format: (v) => v.replace(/(\d{2,3})(\d{3,4})(\d{4})/, "$1 $2 $3"),
        length: 10
    },
    {
        name: 'Jamaica',
        code: 'JM',
        dialCode: '+1-876',
        icon: '🇯🇲',
        format: (v) => v.replace(/(\d{3})(\d{4})/, "$1-$2"),
        length: 7
    },
    {
        name: 'Japón',
        code: 'JP',
        dialCode: '+81',
        icon: '🇯🇵',
        format: (v) => v.replace(/(\d{2})(\d{4})(\d{4})/, "$1-$2-$3"),
        length: 10
    },
    {
        name: 'Jordania',
        code: 'JO',
        icon: '🇯🇴',
        dialCode: '+962',
        format: (v) => v.replace(/(\d)(\d{4})(\d{4})/, "$1 $2 $3"),
        length: 9
    },
    {
        name: 'Kazajistán',
        code: 'KZ',
        dialCode: '+7',
        icon: '🇰🇿',
        format: (v) => v.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, "($1) $2-$3-$4"),
        length: 10
    },
    {
        name: 'Kenia',
        code: 'KE',
        dialCode: '+254',
        icon: '🇰🇪',
        format: (v) => v.replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3"),
        length: 9
    },
    {
        name: 'Kirguistán',
        code: 'KG',
        dialCode: '+996',
        icon: '🇰🇬',
        format: (v) => v.replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3"),
        length: 9
    },
    {
        name: 'Kiribati',
        code: 'KI',
        dialCode: '+686',
        icon: '🇰🇮',
        format: (v) => v.replace(/(\d{2})(\d{3})/, "$1 $2"),
        length: 5
    },
    {
        name: 'Kuwait',
        code: 'KW',
        dialCode: '+965',
        icon: '🇰🇼',
        format: (v) => v.replace(/(\d{4})(\d{4})/, "$1 $2"),
        length: 8
    },
    {
        name: 'Laos',
        code: 'LA',
        dialCode: '+856',
        icon: '🇱🇦',
        format: (v) => v.replace(/(\d{2})(\d{3})(\d{3})/, "$1 $2 $3"),
        length: 8
    },
    {
        name: 'Lesoto',
        code: 'LS',
        dialCode: '+266',
        icon: '🇱🇸',
        format: (v) => v.replace(/(\d{4})(\d{4})/, "$1 $2"),
        length: 8
    },
    {
        name: 'Letonia',
        code: 'LV',
        dialCode: '+371',
        icon: '🇱🇻',
        format: (v) => v.replace(/(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4"),
        length: 8
    },
    {
        name: 'Líbano',
        code: 'LB',
        dialCode: '+961',
        icon: '🇱🇧',
        format: (v) => v.replace(/(\d)(\d{3})(\d{3})/, "$1 $2 $3"),
        length: 7
    },
    {
        name: 'Liberia',
        code: 'LR',
        dialCode: '+231',
        icon: '🇱🇷',
        format: (v) => v.replace(/(\d{2})(\d{3})(\d{3})/, "$1 $2 $3"),
        length: 8
    },
    {
        name: 'Libia',
        code: 'LY',
        dialCode: '+218',
        icon: '🇱🇾',
        format: (v) => v.replace(/(\d{2})(\d{3})(\d{4})/, "$1 $2 $3"),
        length: 9
    },
    {
        name: 'Liechtenstein',
        code: 'LI',
        dialCode: '+423',
        icon: '🇱🇮',
        format: (v) => v.replace(/(\d{3})(\d{4})/, "$1 $2"),
        length: 7
    },
    {
        name: 'Lituania',
        code: 'LT',
        dialCode: '+370',
        icon: '🇱🇹',
        format: (v) => v.replace(/(\d{3})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4"),
        length: 9
    },
    {
        name: 'Luxemburgo',
        code: 'LU',
        dialCode: '+352',
        icon: '🇱🇺',
        format: (v) => v.replace(/(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4"),
        length: 8
    },
    {
        name: 'Macedonia del Norte',
        code: 'MK',
        dialCode: '+389',
        icon: '🇲🇰',
        format: (v) => v.replace(/(\d{2})(\d{3})(\d{3})/, "$1 $2 $3"),
        length: 8
    },
    {
        name: 'Madagascar',
        code: 'MG',
        dialCode: '+261',
        icon: '🇲🇬',
        format: (v) => v.replace(/(\d{2})(\d{2})(\d{3})(\d{2})/, "$1 $2 $3 $4"),
        length: 9
    },
    {
        name: 'Malasia',
        code: 'MY',
        dialCode: '+60',
        icon: '🇲🇾',
        format: (v) => v.replace(/(\d{2})(\d{3})(\d{4})/, "$1-$2 $3"),
        length: 9
    },
    {
        name: 'Malaui',
        code: 'MW',
        dialCode: '+265',
        icon: '🇲🇼',
        format: (v) => v.replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3"),
        length: 9
    },
    {
        name: 'Maldivas',
        code: 'MV',
        dialCode: '+960',
        icon: '🇲🇻',
        format: (v) => v.replace(/(\d{3})(\d{4})/, "$1 $2"),
        length: 7
    },
    {
        name: 'Mali',
        code: 'ML',
        dialCode: '+223',
        icon: '🇲🇱',
        format: (v) => v.replace(/(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4"),
        length: 8
    },
    {
        name: 'Malta',
        code: 'MT',
        dialCode: '+356',
        icon: '🇲🇹',
        format: (v) => v.replace(/(\d{4})(\d{4})/, "$1 $2"),
        length: 8
    },
    {
        name: 'Marruecos',
        code: 'MA',
        dialCode: '+212',
        icon: '🇲🇦',
        format: (v) => v.replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3"),
        length: 9
    },
    {
        name: 'Mauricio',
        code: 'MU',
        dialCode: '+230',
        icon: '🇲🇺',
        format: (v) => v.replace(/(\d{3})(\d{4})/, "$1 $2"),
        length: 7
    },
    {
        name: 'Mauritania',
        code: 'MR',
        dialCode: '+222',
        icon: '🇲🇷',
        format: (v) => v.replace(/(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4"),
        length: 8
    },
    {
        name: 'México',
        code: 'MX',
        dialCode: '+52',
        icon: '🇲🇽',
        format: (v) => v.replace(/(\d{2})(\d{4})(\d{4})/, "$1 $2 $3"), // Celular
        length: 10
    },
    {
        name: 'Micronesia',
        code: 'FM',
        dialCode: '+691',
        icon: '🇫🇲',
        format: (v) => v.replace(/(\d{3})(\d{4})/, "$1-$2"),
        length: 7
    },
    {
        name: 'Moldavia',
        code: 'MD',
        dialCode: '+373',
        icon: '🇲🇩',
        format: (v) => v.replace(/(\d{2})(\d{3})(\d{3})/, "$1 $2 $3"),
        length: 8
    },
    {
        name: 'Mónaco',
        code: 'MC',
        dialCode: '+377',
        icon: '🇲🇨',
        format: (v) => v.replace(/(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4"),
        length: 8
    },
    {
        name: 'Mongolia',
        code: 'MN',
        dialCode: '+976',
        icon: '🇲🇳',
        format: (v) => v.replace(/(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4"),
        length: 8
    },
    {
        name: 'Montenegro',
        code: 'ME',
        dialCode: '+382',
        icon: '🇲🇪',
        format: (v) => v.replace(/(\d{2})(\d{3})(\d{3})/, "$1 $2 $3"),
        length: 8
    },
    {
        name: 'Mozambique',
        code: 'MZ',
        dialCode: '+258',
        icon: '🇲🇿',
        format: (v) => v.replace(/(\d{2})(\d{3})(\d{4})/, "$1 $2 $3"),
        length: 9
    },
    {
        name: 'Namibia',
        code: 'NA',
        dialCode: '+264',
        icon: '🇳🇦',
        format: (v) => v.replace(/(\d{2})(\d{3})(\d{4})/, "$1 $2 $3"),
        length: 9
    },
    {
        name: 'Nauru',
        code: 'NR',
        dialCode: '+674',
        icon: '🇳🇷',
        format: (v) => v.replace(/(\d{3})(\d{4})/, "$1 $2"),
        length: 7
    },
    {
        name: 'Nepal',
        code: 'NP',
        dialCode: '+977',
        icon: '🇳🇵',
        format: (v) => v.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3"),
        length: 10
    },
    {
        name: 'Nicaragua',
        code: 'NI',
        dialCode: '+505',
        icon: '🇳🇮',
        format: (v) => v.replace(/(\d{4})(\d{4})/, "$1-$2"),
        length: 8
    },
    {
        name: 'Níger',
        code: 'NE',
        dialCode: '+227',
        icon: '🇳🇪',
        format: (v) => v.replace(/(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4"),
        length: 8
    },
    {
        name: 'Nigeria',
        code: 'NG',
        dialCode: '+234',
        icon: '🇳🇬',
        format: (v) => v.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3"),
        length: 10
    },
    {
        name: 'Noruega',
        code: 'NO',
        dialCode: '+47',
        icon: '🇳🇴',
        format: (v) => v.replace(/(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4"),
        length: 8
    },
    {
        name: 'Nueva Zelanda',
        code: 'NZ',
        dialCode: '+64',
        icon: '🇳🇿',
        format: (v) => v.replace(/(\d{3})(\d{3})(\d{3,4})/, "$1 $2 $3"),
        length: 9
    },
    {
        name: 'Omán',
        code: 'OM',
        dialCode: '+968',
        icon: '🇴🇲',
        format: (v) => v.replace(/(\d{4})(\d{4})/, "$1 $2"),
        length: 8
    },
    {
        name: 'Países Bajos',
        code: 'NL',
        dialCode: '+31',
        icon: '🇳🇱',
        format: (v) => v.replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4"),
        length: 9
    },
    {
        name: 'Pakistán',
        code: 'PK',
        dialCode: '+92',
        icon: '🇵🇰',
        format: (v) => v.replace(/(\d{3})(\d{7})/, "$1-$2"),
        length: 10
    },
    {
        name: 'Palaos',
        code: 'PW',
        dialCode: '+680',
        icon: '🇵🇼',
        format: (v) => v.replace(/(\d{3})(\d{4})/, "$1-$2"),
        length: 7
    },
    {
        name: 'Palestina',
        code: 'PS',
        dialCode: '+970',
        icon: '🇵🇸',
        format: (v) => v.replace(/(\d)(\d{3})(\d{4})/, "$1 $2 $3"),
        length: 8
    },
    {
        name: 'Panamá',
        code: 'PA',
        dialCode: '+507',
        icon: '🇵🇦',
        format: (v) => v.replace(/(\d{4})(\d{4})/, "$1-$2"),
        length: 8
    },
    {
        name: 'Papúa Nueva Guinea',
        code: 'PG',
        dialCode: '+675',
        icon: '🇵🇬',
        format: (v) => v.replace(/(\d{4})(\d{4})/, "$1 $2"),
        length: 8
    },
    {
        name: 'Paraguay',
        code: 'PY',
        dialCode: '+595',
        icon: '🇵🇾',
        format: (v) => v.replace(/(\d{2})(\d{3})(\d{3})/, "$1 $2 $3"),
        length: 8
    },
    {
        name: 'Perú',
        code: 'PE',
        dialCode: '+51',
        icon: '🇵🇪',
        format: (v) => v.replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3"),
        length: 9
    },
    {
        name: 'Polonia',
        code: 'PL',
        dialCode: '+48',
        icon: '🇵🇱',
        format: (v) => v.replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3"),
        length: 9
    },
    {
        name: 'Portugal',
        code: 'PT',
        dialCode: '+351',
        icon: '🇵🇹',
        format: (v) => v.replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3"),
        length: 9
    },
    {
        name: 'Qatar',
        code: 'QA',
        dialCode: '+974',
        icon: '🇶🇦',
        format: (v) => v.replace(/(\d{4})(\d{4})/, "$1 $2"),
        length: 8
    },
    {
        name: 'Reino Unido',
        code: 'GB',
        dialCode: '+44',
        icon: '🇬🇧',
        format: (v) => v.replace(/(\d{3,4})(\d{3})(\d{3,4})/, "$1 $2 $3"),
        length: 10
    },
    {
        name: 'República Centroafricana',
        code: 'CF',
        dialCode: '+236',
        icon: '🇨🇫',
        format: (v) => v.replace(/(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4"),
        length: 8
    },
    {
        name: 'República Checa',
        code: 'CZ',
        dialCode: '+420',
        icon: '🇨🇿',
        format: (v) => v.replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3"),
        length: 9
    },
    {
        name: 'República Dominicana',
        code: 'DO',
        dialCode: '+1-809',
        icon: '🇩🇴',
        format: (v) => v.replace(/(\d{3})(\d{4})/, "$1-$2"),
        length: 7
    },
    {
        name: 'Ruanda',
        code: 'RW',
        dialCode: '+250',
        icon: '🇷🇼',
        format: (v) => v.replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3"),
        length: 9
    },
    {
        name: 'Rumanía',
        code: 'RO',
        dialCode: '+40',
        icon: '🇷🇴',
        format: (v) => v.replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3"),
        length: 9
    },
    {
        name: 'Rusia',
        code: 'RU',
        dialCode: '+7',
        icon: '🇷🇺',
        format: (v) => v.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, "($1) $2-$3-$4"),
        length: 10
    },
    {
        name: 'Samoa',
        code: 'WS',
        dialCode: '+685',
        icon: '🇼🇸',
        format: (v) => v.replace(/(\d{2})(\d{4})/, "$1 $2"),
        length: 6
    },
    {
        name: 'San Cristóbal y Nieves',
        code: 'KN',
        dialCode: '+1-869',
        icon: '🇰🇳',
        format: (v) => v.replace(/(\d{3})(\d{4})/, "$1-$2"),
        length: 7
    },
    {
        name: 'San Marino',
        code: 'SM',
        dialCode: '+378',
        icon: '🇸🇲',
        format: (v) => v.replace(/(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4"),
        length: 8
    },
    {
        name: 'San Vicente y las Granadinas',
        code: 'VC',
        dialCode: '+1-784',
        icon: '🇻🇨',
        format: (v) => v.replace(/(\d{3})(\d{4})/, "$1-$2"),
        length: 7
    },
    {
        name: 'Santa Lucía',
        code: 'LC',
        dialCode: '+1-758',
        icon: '🇱🇨',
        format: (v) => v.replace(/(\d{3})(\d{4})/, "$1-$2"),
        length: 7
    },
    {
        name: 'Santo Tomé y Príncipe',
        code: 'ST',
        dialCode: '+239',
        icon: '🇸🇹',
        format: (v) => v.replace(/(\d{2})(\d{3})(\d{2})/, "$1 $2 $3"),
        length: 7
    },
    {
        name: 'Senegal',
        code: 'SN',
        dialCode: '+221',
        icon: '🇸🇳',
        format: (v) => v.replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4"),
        length: 9
    },
    {
        name: 'Serbia',
        code: 'RS',
        dialCode: '+381',
        icon: '🇷🇸',
        format: (v) => v.replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4"),
        length: 9
    },
    {
        name: 'Seychelles',
        code: 'SC',
        dialCode: '+248',
        icon: '🇸🇨',
        format: (v) => v.replace(/(\d{3})(\d{4})/, "$1 $2"),
        length: 7
    },
    {
        name: 'Sierra Leona',
        code: 'SL',
        dialCode: '+232',
        icon: '🇸🇱',
        format: (v) => v.replace(/(\d{2})(\d{3})(\d{3})/, "$1 $2 $3"),
        length: 8
    },
    {
        name: 'Singapur',
        code: 'SG',
        dialCode: '+65',
        icon: '🇸🇬',
        format: (v) => v.replace(/(\d{4})(\d{4})/, "$1 $2"),
        length: 8
    },
    {
        name: 'Siria',
        code: 'SY',
        dialCode: '+963',
        icon: '🇸🇾',
        format: (v) => v.replace(/(\d)(\d{3})(\d{3})(\d{3})/, "$1 $2 $3 $4"),
        length: 10
    },
    {
        name: 'Somalia',
        code: 'SO',
        dialCode: '+252',
        icon: '🇸🇴',
        format: (v) => v.replace(/(\d)(\d{3})(\d{4})/, "$1 $2 $3"),
        length: 8
    },
    {
        name: 'Sri Lanka',
        code: 'LK',
        dialCode: '+94',
        icon: '🇱🇰',
        format: (v) => v.replace(/(\d{2})(\d{3})(\d{4})/, "$1 $2 $3"),
        length: 9
    },
    {
        name: 'Sudáfrica',
        code: 'ZA',
        dialCode: '+27',
        icon: '🇿🇦',
        format: (v) => v.replace(/(\d{2})(\d{3})(\d{4})/, "$1 $2 $3"),
        length: 9
    },
    {
        name: 'Sudán',
        code: 'SD',
        dialCode: '+249',
        icon: '🇸🇩',
        format: (v) => v.replace(/(\d{2})(\d{3})(\d{4})/, "$1 $2 $3"),
        length: 9
    },
    {
        name: 'Sudán del Sur',
        code: 'SS',
        dialCode: '+211',
        icon: '🇸🇸',
        format: (v) => v.replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3"),
        length: 9
    },
    {
        name: 'Suecia',
        code: 'SE',
        dialCode: '+46',
        icon: '🇸🇪',
        format: (v) => v.replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4"),
        length: 9
    },
    {
        name: 'Suiza',
        code: 'CH',
        dialCode: '+41',
        icon: '🇨🇭',
        format: (v) => v.replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4"),
        length: 9
    },
    {
        name: 'Surinam',
        code: 'SR',
        dialCode: '+597',
        icon: '🇸🇷',
        format: (v) => v.replace(/(\d{3})(\d{4})/, "$1-$2"),
        length: 7
    },
    {
        name: 'Tailandia',
        code: 'TH',
        dialCode: '+66',
        icon: '🇹🇭',
        format: (v) => v.replace(/(\d{2})(\d{3})(\d{4})/, "$1 $2 $3"),
        length: 9
    },
    {
        name: 'Taiwán',
        code: 'TW',
        dialCode: '+886',
        icon: '🇹🇼',
        format: (v) => v.replace(/(\d{2})(\d{4})(\d{4})/, "$1 $2 $3"),
        length: 10
    },
    {
        name: 'Tanzania',
        code: 'TZ',
        dialCode: '+255',
        icon: '🇹🇿',
        format: (v) => v.replace(/(\d{2})(\d{3})(\d{4})/, "$1 $2 $3"),
        length: 9
    },
    {
        name: 'Tayikistán',
        code: 'TJ',
        dialCode: '+992',
        icon: '🇹🇯',
        format: (v) => v.replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4"),
        length: 9
    },
    {
        name: 'Timor Oriental',
        code: 'TL',
        dialCode: '+670',
        icon: '🇹🇱',
        format: (v) => v.replace(/(\d{4})(\d{3})/, "$1 $2"),
        length: 7
    },
    {
        name: 'Togo',
        code: 'TG',
        dialCode: '+228',
        icon: '🇹🇬',
        format: (v) => v.replace(/(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4"),
        length: 8
    },
    {
        name: 'Tonga',
        code: 'TO',
        dialCode: '+676',
        icon: '🇹🇴',
        format: (v) => v.replace(/(\d{2})(\d{3})(\d{2})/, "$1 $2 $3"),
        length: 7
    },
    {
        name: 'Trinidad y Tobago',
        code: 'TT',
        dialCode: '+1-868',
        icon: '🇹🇹',
        format: (v) => v.replace(/(\d{3})(\d{4})/, "$1-$2"),
        length: 7
    },
    {
        name: 'Túnez',
        code: 'TN',
        dialCode: '+216',
        icon: '🇹🇳',
        format: (v) => v.replace(/(\d{2})(\d{3})(\d{3})/, "$1 $2 $3"),
        length: 8
    },
    {
        name: 'Turkmenistán',
        code: 'TM',
        dialCode: '+993',
        icon: '🇹🇲',
        format: (v) => v.replace(/(\d)(\d{3})(\d{4})/, "$1 $2 $3"),
        length: 8
    },
    {
        name: 'Turquía',
        code: 'TR',
        dialCode: '+90',
        icon: '🇹🇷',
        format: (v) => v.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4"),
        length: 10
    },
    {
        name: 'Tuvalu',
        code: 'TV',
        dialCode: '+688',
        icon: '🇹🇻',
        format: (v) => v.replace(/(\d{3})(\d{4})/, "$1 $2"),
        length: 7
    },
    {
        name: 'Ucrania',
        code: 'UA',
        dialCode: '+380',
        icon: '🇺🇦',
        format: (v) => v.replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4"),
        length: 9
    },
    {
        name: 'Uganda',
        code: 'UG',
        dialCode: '+256',
        icon: '🇺🇬',
        format: (v) => v.replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3"),
        length: 9
    },
    {
        name: 'Uruguay',
        code: 'UY',
        dialCode: '+598',
        icon: '🇺🇾',
        format: (v) => v.replace(/(\d{4})(\d{4})/, "$1 $2"),
        length: 8
    },
    {
        name: 'Uzbekistán',
        code: 'UZ',
        dialCode: '+998',
        icon: '🇺🇿',
        format: (v) => v.replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4"),
        length: 9
    },
    {
        name: 'Vanuatu',
        code: 'VU',
        dialCode: '+678',
        icon: '🇻🇺',
        format: (v) => v.replace(/(\d{2})(\d{2})(\d{3})/, "$1 $2 $3"),
        length: 7
    },
    {
        name: 'Ciudad del Vaticano',
        code: 'VA',
        dialCode: '+379',
        icon: '🇻🇦',
        format: (v) => v, // Muy pocos números, formato simple
        length: 7
    },
    {
        name: 'Venezuela',
        code: 'VE',
        dialCode: '+58',
        icon: '🇻🇪',
        format: (v) => v.replace(/(\d{3})(\d{7})/, "$1-$2"), // 3 dígitos de código de área + 7 dígitos
        length: 10
    },
    {
        name: 'Vietnam',
        code: 'VN',
        dialCode: '+84',
        icon: '🇻🇳',
        format: (v) => v.replace(/(\d{2})(\d{3})(\d{4})/, "$1 $2 $3"),
        length: 9
    },
    {
        name: 'Yemen',
        code: 'YE',
        dialCode: '+967',
        icon: '🇾🇪',
        format: (v) => v.replace(/(\d)(\d{3})(\d{4})/, "$1 $2 $3"),
        length: 8
    },
    {
        name: 'Zambia',
        code: 'ZM',
        dialCode: '+260',
        icon: '🇿🇲',
        format: (v) => v.replace(/(\d{2})(\d{3})(\d{4})/, "$1 $2 $3"),
        length: 9
    },
    {
        name: 'Zimbabue',
        code: 'ZW',
        dialCode: '+263',
        icon: '🇿🇼',
        format: (v) => v.replace(/(\d{2})(\d{3})(\d{4})/, "$1 $2 $3"),
        length: 9
    },
];