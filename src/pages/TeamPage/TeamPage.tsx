import styles from './TeamPage.module.css'
import HeaderLight from '../../components/HeaderLight/HeaderLight';
import Navigation from '../../components/Navigation/Navigation';
import TeamMember from '../../components/TeamMember/TeamMember';
import team2 from '../../assets/images/team/emp-2.jpg'
import team3 from '../../assets/images/team/emp-3.jpg'
import team4 from '../../assets/images/team/emp-4.jpg'
import team5 from '../../assets/images/team/emp-5.jpg'

const TeamPage = () => {
    document.body.style.background = '#fafbf3'

    return (
        <>
            <div className='main_wrapper'>
                <div className='_container'>
                    <HeaderLight />
                    <div className={styles.maina_content}>
                        <div>
                            <Navigation theme='#000' />
                        </div>
                        <div className={styles.team_items}>
                            <TeamMember 
                                avatar={team2}
                                last_name='Хафизов'
                                first_name='Раис'
                                middle_name='Фанисович'
                                job_title='Главный врач -врач имплантолог хирург, ортопед'
                                even={false}
                            />
                            <TeamMember 
                                avatar={team3}
                                last_name='Ханипова'
                                first_name='Камилла'
                                middle_name='Даниловна'
                                job_title='Врач - стоматолог - терапевт'
                                even={true}
                            />
                            <TeamMember 
                                avatar={team4}
                                last_name='Хайруллина'
                                first_name='Лилия'
                                middle_name='Мансуровна'
                                job_title='Врач-стоматолог-терапевт'
                                even={false}
                            />
                            <TeamMember 
                                avatar={team5}
                                last_name='Шахнавазов'
                                first_name='Сулейман'
                                middle_name='Рабаданович'
                                job_title='Врач - стоматолог - ортодонт'
                                even={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TeamPage