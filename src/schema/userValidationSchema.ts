import * as Yup from 'yup';

export const schema = Yup.object().shape({
  username: Yup.string()
    .required('İstifadəçi adı tələb olunur')
    .matches(/^[a-zA-Z0-9]+$/, 'İstifadəçi adı yalnız hərf və rəqəmlərdən ibarət olmalıdır')
    .min(3, 'İstifadəçi adı ən azı 3 simvoldan ibarət olmalıdır')
    .max(20, 'İstifadəçi adı ən çox 20 simvoldan ibarət olmalıdır')
});
