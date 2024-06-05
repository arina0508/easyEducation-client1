const Footer = () => {
  return (
    <footer className=" pt-10 items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          <div className="mb-6">
            <h4 className=" text-lg font-semibold mb-3">Контакты</h4>
            <p>Телефон: +7 (900) 596-7810</p>
            <p>Email: EasyEducation@mail.ru</p>
          </div>
          <div className="mr-8 mt-5">
            <p className="text-center">Правила сервиса</p>
          </div>
          <div className="mr-8 mt-5">
            <p className="text-center">Политика конфиденциальности</p>
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3 ">Мы в соцсетях</h4>
            <div className="flex items-center ">
              <a
                className="mr-5"
                href="https://vk.com/rinatkp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-10 h-10" src="/img/Group.svg" alt="" />
              </a>
              <a
                href="https://vk.com/rinatkp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-10 h-10" src="/img/Grop.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
