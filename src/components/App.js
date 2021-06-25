import "../css/styles.css"

const App = () => {
    return (
        <>
            <nav className="nav">
                <div className="nav__logo">TJAM</div>
                <input type="checkbox" id="nav-toggle" className="nav-toggle"/>
                <ul className="nav-list">
                    <li className="nav-list__item"><a href="#about">Home</a></li>
                    <li className="nav-list__item"><a href="#about">About</a></li>
                    <li className="nav-list__item"><a href="#blog">Blog</a></li>
                    <li className="nav-list__item"><a href="#skills">Skills</a></li>
                    <li className="nav-list__item"><a href="#contact">Contact</a></li>
                </ul>
                <label for="nav-toggle" className="nav-toggle-label"><span></span></label>
            </nav>
            <div className="header">
                <div className="header__content">
                    <svg className="header__logo" width="410" height="114" viewBox="0 0 410 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M90.2807 6.33186L90.7782 3.41199H87.8162H9.62422H7.52947L7.16282 5.4744L3.70681 24.9144L3.18457 27.852H6.16821H29.9727L16.0902 106.566L15.5727 109.5H18.5522H43.1762H45.2739L45.6382 107.434L59.6739 27.852H84.5042H86.6143L86.9687 25.7719L90.2807 6.33186ZM157.997 6.34469L158.512 3.41199H155.534H130.91H128.811L128.448 5.47929L116.354 74.3023C116.353 74.3041 116.353 74.3059 116.353 74.3076C115.741 77.7138 114.57 79.9896 113.058 81.4296C111.662 82.7551 109.858 83.476 107.438 83.476C105.32 83.476 104.01 82.9003 103.158 82.0482C102.352 81.2424 101.73 79.8306 101.73 77.336C101.73 76.2755 101.853 75.041 102.12 73.6207L102.675 70.66H99.6624H75.1823H73.1328L72.7309 72.6697C72.2126 75.2613 71.9623 78.1173 71.9623 81.224C71.9623 90.4036 74.7907 97.7887 80.7385 102.98L80.7469 102.987L80.7554 102.994C86.7066 108.095 94.6409 110.508 104.27 110.508C114.951 110.508 124.124 107.472 131.634 101.299C139.185 95.0927 143.895 86.3088 145.899 75.1873L145.901 75.1767L157.997 6.34469ZM176.72 109.5H178.243L178.942 108.147L187.459 91.644H221.535L224.076 107.398L224.415 109.5H226.544H252.608H255.614L255.067 106.545L236.347 5.45676L235.968 3.41199H233.888H205.376H203.883L203.175 4.72674L148.743 105.815L146.759 109.5H150.944H176.72ZM405.538 6.34685L406.056 3.41199H403.076H374.132H372.687L371.966 4.66397L334.82 69.1382L320.12 5.35057L319.674 3.41199H317.684H288.596H286.499L286.134 5.47712L268.278 106.565L267.76 109.5H270.74H295.364H297.465L297.827 107.431L306.176 59.7065L315.664 107.487L316.064 109.5H318.116H337.988H339.465L340.178 108.207L366.28 60.8397L358.135 106.562L357.611 109.5H360.596H385.22H387.317L387.682 107.435L405.538 6.34685ZM199.685 67.924L213.601 40.9227L217.859 67.924H199.685Z" stroke="white" strokeWidth="5"/>
                    </svg>
                    <button className="btn header__btn">Contact Me</button>
                </div>
            </div>
            <div className="content">
                <section id="about" className="about">
                    <div>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, minus? Impedit blanditiis id saepe omnis iusto perferendis incidunt provident distinctio, porro, et reiciendis laboriosam placeat cum eos sequi eveniet, sapiente consequatur neque reprehenderit. Doloribus consequuntur, impedit eaque iure libero animi at rerum ut repellendus architecto autem, eligendi recusandae sint! Libero modi enim nam totam officia delectus eos cum doloremque ad quae inventore optio, neque officiis vero in necessitatibus similique voluptate alias? Modi ratione quam similique, porro eligendi voluptatum tempora? At ducimus quasi dicta laboriosam porro rerum, consequatur alias unde commodi delectus officia voluptatem, modi amet odio aperiam quo sed facere esse fugiat quam incidunt quas eos! Deleniti numquam tempora quas blanditiis in quia illo iusto qui magni nulla recusandae quis saepe facere, laborum cupiditate incidunt corporis at mollitia repellat nobis voluptates autem inventore. Veritatis quisquam atque voluptatibus porro rem nihil deserunt et vero facilis commodi deleniti repellat dolorem temporibus, neque numquam fugiat aut sunt ipsum nemo officia eaque consectetur ea pariatur quia. Natus cupiditate unde saepe voluptate placeat sit modi nulla distinctio consectetur in a ipsam cum, harum veritatis. Nihil alias eaque voluptates maiores quae dicta ut deserunt et, vel hic error nostrum tenetur a, ipsum at suscipit ratione aliquam.
                    </div>
                </section>
                <section id="blog" className="blog">
                    <div>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, minus? Impedit blanditiis id saepe omnis iusto perferendis incidunt provident distinctio, porro, et reiciendis laboriosam placeat cum eos sequi eveniet, sapiente consequatur neque reprehenderit. Doloribus consequuntur, impedit eaque iure libero animi at rerum ut repellendus architecto autem, eligendi recusandae sint! Libero modi enim nam totam officia delectus eos cum doloremque ad quae inventore optio, neque officiis vero in necessitatibus similique voluptate alias? Modi ratione quam similique, porro eligendi voluptatum tempora? At ducimus quasi dicta laboriosam porro rerum, consequatur alias unde commodi delectus officia voluptatem, modi amet odio aperiam quo sed facere esse fugiat quam incidunt quas eos! Deleniti numquam tempora quas blanditiis in quia illo iusto qui magni nulla recusandae quis saepe facere, laborum cupiditate incidunt corporis at mollitia repellat nobis voluptates autem inventore. Veritatis quisquam atque voluptatibus porro rem nihil deserunt et vero facilis commodi deleniti repellat dolorem temporibus, neque numquam fugiat aut sunt ipsum nemo officia eaque consectetur ea pariatur quia. Natus cupiditate unde saepe voluptate placeat sit modi nulla distinctio consectetur in a ipsam cum, harum veritatis. Nihil alias eaque voluptates maiores quae dicta ut deserunt et, vel hic error nostrum tenetur a, ipsum at suscipit ratione aliquam.
                    </div>
                </section>
                <section id="skills" className="skills">
                    <div>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, minus? Impedit blanditiis id saepe omnis iusto perferendis incidunt provident distinctio, porro, et reiciendis laboriosam placeat cum eos sequi eveniet, sapiente consequatur neque reprehenderit. Doloribus consequuntur, impedit eaque iure libero animi at rerum ut repellendus architecto autem, eligendi recusandae sint! Libero modi enim nam totam officia delectus eos cum doloremque ad quae inventore optio, neque officiis vero in necessitatibus similique voluptate alias? Modi ratione quam similique, porro eligendi voluptatum tempora? At ducimus quasi dicta laboriosam porro rerum, consequatur alias unde commodi delectus officia voluptatem, modi amet odio aperiam quo sed facere esse fugiat quam incidunt quas eos! Deleniti numquam tempora quas blanditiis in quia illo iusto qui magni nulla recusandae quis saepe facere, laborum cupiditate incidunt corporis at mollitia repellat nobis voluptates autem inventore. Veritatis quisquam atque voluptatibus porro rem nihil deserunt et vero facilis commodi deleniti repellat dolorem temporibus, neque numquam fugiat aut sunt ipsum nemo officia eaque consectetur ea pariatur quia. Natus cupiditate unde saepe voluptate placeat sit modi nulla distinctio consectetur in a ipsam cum, harum veritatis. Nihil alias eaque voluptates maiores quae dicta ut deserunt et, vel hic error nostrum tenetur a, ipsum at suscipit ratione aliquam.
                    </div>
                </section>
                <section id="contact" className="contact">
                    <div>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, minus? Impedit blanditiis id saepe omnis iusto perferendis incidunt provident distinctio, porro, et reiciendis laboriosam placeat cum eos sequi eveniet, sapiente consequatur neque reprehenderit. Doloribus consequuntur, impedit eaque iure libero animi at rerum ut repellendus architecto autem, eligendi recusandae sint! Libero modi enim nam totam officia delectus eos cum doloremque ad quae inventore optio, neque officiis vero in necessitatibus similique voluptate alias? Modi ratione quam similique, porro eligendi voluptatum tempora? At ducimus quasi dicta laboriosam porro rerum, consequatur alias unde commodi delectus officia voluptatem, modi amet odio aperiam quo sed facere esse fugiat quam incidunt quas eos! Deleniti numquam tempora quas blanditiis in quia illo iusto qui magni nulla recusandae quis saepe facere, laborum cupiditate incidunt corporis at mollitia repellat nobis voluptates autem inventore. Veritatis quisquam atque voluptatibus porro rem nihil deserunt et vero facilis commodi deleniti repellat dolorem temporibus, neque numquam fugiat aut sunt ipsum nemo officia eaque consectetur ea pariatur quia. Natus cupiditate unde saepe voluptate placeat sit modi nulla distinctio consectetur in a ipsam cum, harum veritatis. Nihil alias eaque voluptates maiores quae dicta ut deserunt et, vel hic error nostrum tenetur a, ipsum at suscipit ratione aliquam.
                    </div>
                </section>
            </div>

        </>
    ) 
}

export default App;