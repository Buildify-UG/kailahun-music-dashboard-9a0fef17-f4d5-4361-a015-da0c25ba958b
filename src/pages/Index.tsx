import { useState } from 'react';
import { Music, Users, Calendar, MapPin, Play, Pause, Volume2, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface Project {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'upcoming' | 'completed';
  progress: number;
  participants: number;
  startDate: string;
  location: string;
  genre: string;
  image: string;
}

interface Musician {
  id: string;
  name: string;
  instrument: string;
  projects: number;
  avatar: string;
}

const SAMPLE_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Kailahun Cultural Heritage',
    description: 'Recording traditional Mende music and preserving cultural heritage',
    status: 'active',
    progress: 65,
    participants: 12,
    startDate: 'Jan 2024',
    location: 'Kailahun District',
    genre: 'Traditional',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=300&fit=crop',
  },
  {
    id: '2',
    title: 'Youth Music Academy',
    description: 'Training next generation of musicians in contemporary styles',
    status: 'active',
    progress: 45,
    participants: 28,
    startDate: 'Mar 2024',
    location: 'Kailahun Town',
    genre: 'Contemporary',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
  },
  {
    id: '3',
    title: 'Community Festival 2024',
    description: 'Annual music festival celebrating local talent',
    status: 'upcoming',
    progress: 20,
    participants: 45,
    startDate: 'Dec 2024',
    location: 'Central Venue',
    genre: 'Mixed',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=300&fit=crop',
  },
  {
    id: '4',
    title: 'Digital Recording Studio',
    description: 'Establishing first professional recording facility',
    status: 'upcoming',
    progress: 30,
    participants: 8,
    startDate: 'Q1 2025',
    location: 'Kailahun District',
    genre: 'Production',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=300&fit=crop',
  },
];

const SAMPLE_MUSICIANS: Musician[] = [
  {
    id: '1',
    name: 'Mohamed Jalloh',
    instrument: 'Kora',
    projects: 3,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    id: '2',
    name: 'Amara Sesay',
    instrument: 'Vocals',
    projects: 4,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    id: '3',
    name: 'Ibrahim Koroma',
    instrument: 'Drums',
    projects: 3,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
  },
  {
    id: '4',
    name: 'Fatou Bangura',
    instrument: 'Guitar',
    projects: 2,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
];

const STATS = [
  { label: 'Active Projects', value: '2', icon: Music },
  { label: 'Total Musicians', value: '156', icon: Users },
  { label: 'Events This Year', value: '8', icon: Calendar },
  { label: 'Growth', value: '+34%', icon: TrendingUp },
];

export default function Index() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-emerald-500/10 text-emerald-700 border-emerald-200';
      case 'upcoming':
        return 'bg-blue-500/10 text-blue-700 border-blue-200';
      case 'completed':
        return 'bg-gray-500/10 text-gray-700 border-gray-200';
      default:
        return 'bg-gray-500/10 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                <Music className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Kailahun Music</h1>
                <p className="text-sm text-muted-foreground">Project Dashboard</p>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
              New Project
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className="p-6 border-border hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                    <p className="text-3xl font-bold text-foreground mt-2">{stat.value}</p>
                  </div>
                  <Icon className="w-8 h-8 text-purple-500/30" />
                </div>
              </Card>
            );
          })}
        </div>

        {/* Active Projects Section */}
        <section className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-2">Projects</h2>
            <p className="text-muted-foreground">Manage and track all musical initiatives</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {SAMPLE_PROJECTS.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden border-border hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                {/* Project Image */}
                <div className="relative h-40 overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-3 right-3 flex gap-2">
                    <Badge className={getStatusColor(project.status)}>
                      {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                    </Badge>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                  {/* Meta Information */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {project.startDate}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      {project.participants} participants
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-medium text-muted-foreground">Progress</span>
                      <span className="text-xs font-bold text-foreground">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <Badge variant="outline" className="border-border">
                      {project.genre}
                    </Badge>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-purple-500 hover:text-purple-600 hover:bg-purple-50"
                      onClick={() => setPlayingId(playingId === project.id ? null : project.id)}
                    >
                      {playingId === project.id ? (
                        <Pause className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Musicians Section */}
        <section className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-2">Featured Musicians</h2>
            <p className="text-muted-foreground">Talented artists contributing to our projects</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SAMPLE_MUSICIANS.map((musician) => (
              <Card key={musician.id} className="p-6 text-center border-border hover:shadow-lg transition-shadow">
                <img
                  src={musician.avatar}
                  alt={musician.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-2 border-border"
                />
                <h3 className="font-bold text-foreground">{musician.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{musician.instrument}</p>
                <Badge variant="secondary" className="text-xs">
                  {musician.projects} projects
                </Badge>
              </Card>
            ))}
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-2">Quick Actions</h2>
            <p className="text-muted-foreground">Manage your musical initiatives</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Schedule Event', icon: Calendar, description: 'Create new performance or workshop' },
              { title: 'Add Musician', icon: Users, description: 'Invite artists to collaborate' },
              { title: 'Record Session', icon: Volume2, description: 'Start a new recording project' },
            ].map((action, i) => {
              const Icon = action.icon;
              return (
                <Card key={i} className="p-6 border-border hover:shadow-lg transition-all cursor-pointer group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-colors">
                      <Icon className="w-6 h-6 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{action.title}</h3>
                      <p className="text-sm text-muted-foreground">{action.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <p>Kailahun Music Project Dashboard © 2024</p>
        </div>
      </footer>
    </div>
  );
}
