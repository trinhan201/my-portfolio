import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About() {
    return (
        <div id="about" className="px-[36px] py-[72px] xl:p-[72px] dark:bg-[#19211e]">
            <div className="font-bold text-3xl">
                <h1 className="inline relative dark:text-white">
                    About Me
                    <span className="absolute w-14 left-0 bottom-[-8px] border-b-4 border-[#88b4dc]"></span>
                </h1>
            </div>
            <div className="flex flex-col gap-y-[50px] xl:flex-row xl:justify-between xl:gap-x-[100px] py-[24px] mt-[32px]">
                <div className="flex-1">
                    <h1 className="text-2xl font-semibold leading-10 dark:text-white">Who Am I</h1>
                    <p className="opacity-80 dark:text-white">
                        My name is Phieu An. I am an IT student of Ton Duc Thang University since 2018. I aim to become
                        a Front-end web developer early. I have basic knowledge of HTML, CSS, JavaScript, React and
                        always learn something new everyday. I hope to be able to become a member and give my best to
                        your company.
                    </p>
                </div>
                <div className="flex-1">
                    <h1 className="text-2xl font-semibold leading-10 dark:text-white">Education</h1>
                    <p className="font-semibold text-xl dark:text-white">Information Technology</p>
                    <p className="opacity-80 dark:text-white">Ton Duc Thang University</p>
                    <p className="opacity-80 text-[#df2222]">
                        <span className="mr-2 text-[#df2222]">
                            <FontAwesomeIcon icon={faCalendarDays} />
                        </span>
                        2018 - 2022
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
